import React, { useCallback, useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

type DebouncedFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel: () => void;
};

function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number): DebouncedFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const debouncedFn = (...args: Parameters<T>) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = undefined;
    }, wait);
  };

  debouncedFn.cancel = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  };

  return debouncedFn;
}

type MenuItem = {
  href: string;
  title: string;
  items?: MenuItem[];
};

export const Navigation = ({ menuItems }: { menuItems: MenuItem[] }) => {
  return (
    <nav className="bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="hidden md:block">
        <DesktopNavigation menuItems={menuItems} />
      </div>

      <div className="md:hidden">
        <MobileNavigation menuItems={menuItems} />
      </div>
    </nav>
  );
};

type DesktopMenuSubItemProps = {
  item: MenuItem;
  parentPath: string[];
  activePath: string[];
  onHover: (newPath: string[]) => void;
};

const DesktopMenuSubItem = ({ item, parentPath, activePath, onHover }: DesktopMenuSubItemProps) => {
  const currentPath = [...parentPath, item.title];
  const isActive = activePath.join('|') === currentPath.join('|');
  const hasSubItems = item.items && item.items.length > 0;

  const handleMouseEnter = () => {
    if (hasSubItems) {
      onHover(currentPath);
    }
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter}>
      <div className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer max-w-[250px]">
        <a href={item.href} className="text-gray-700">
          {item.title}
        </a>
        {hasSubItems && <ChevronRight className="w-4 h-4 flex-shrink-0 mt-[3px]" />}
      </div>

      {hasSubItems && isActive && item.items && (
        <div className="absolute left-[calc(100%+3px)] top-0 bg-white rounded shadow-lg border border-gray-200 min-w-48">
          {item.items.map((subItem, index) => (
            <DesktopMenuSubItem
              key={index}
              item={subItem}
              parentPath={currentPath}
              activePath={activePath}
              onHover={onHover}
            />
          ))}
        </div>
      )}
    </div>
  );
};

type DesktopMenuItemProps = {
  item: MenuItem;
  activePath: string[];
  onHover: (newPath: string[]) => void;
};

const DesktopMenuItem = ({ item, activePath, onHover }: DesktopMenuItemProps) => {
  const currentPath = [item.title];
  const isActive = activePath[0] === item.title;
  const hasSubItems = item.items && item.items.length > 0;

  const handleMouseEnter = () => {
    if (hasSubItems) {
      onHover(currentPath);
    }
  };

  return (
    <div className="relative z-10 hover:bg-blue-800" onMouseEnter={handleMouseEnter}>
      <div className="flex items-center gap-2 px-4 py-2 cursor-pointer text-white">
        <a href={item.href}>{item.title}</a>
        {hasSubItems && <ChevronDown className="w-4 h-4 mt-[3px]" />}
      </div>

      {hasSubItems && isActive && item.items && (
        <div className="absolute left-0 top-full bg-white rounded shadow-lg border border-gray-200 min-w-48">
          {item.items.map((subItem, index) => (
            <DesktopMenuSubItem
              key={index}
              item={subItem}
              parentPath={currentPath}
              activePath={activePath}
              onHover={onHover}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopNavigation = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [activePath, setActivePath] = useState<string[]>([]);

  const debouncedClose = useCallback(
    debounce(() => setActivePath([]), 300),
    [],
  );

  const handleHover = (newPath: string[]) => {
    debouncedClose.cancel();
    setActivePath(newPath);
  };

  const handleMouseLeave = () => {
    debouncedClose();
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="flex space-x-4 flex-row justify-between">
      {menuItems.map((item, index) => (
        <DesktopMenuItem key={index} item={item} activePath={activePath} onHover={handleHover} />
      ))}
    </div>
  );
};

const MobileNavigation = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex h-14 items-center justify-between px-6 md:hidden">
        <span className="text-white font-medium">Mеню</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 px-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <div>
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Меню</span>
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="py-2">
            {menuItems.map((item, index) => (
              <MobileMenuItem key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

type MobileMenuItemProps = {
  item: MenuItem;
  level?: number;
};

const MobileMenuItem = ({ item, level = 0 }: MobileMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = item.items && item.items.length > 0;

  const toggleOpen = (event: React.MouseEvent) => {
    if (hasItems) {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div
        className={`flex items-center w-full py-2 pl-${level * 4} pr-4 hover:bg-gray-50 cursor-pointer`}
        onClick={toggleOpen}
      >
        {hasItems ? (
          <div className="flex items-center justify-between w-full">
            <span className="text-gray-700">{item.title}</span>
            {isOpen ? (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            )}
          </div>
        ) : (
          <a href={item.href} className="text-gray-700 hover:text-gray-900">
            {item.title}
          </a>
        )}
      </div>

      {hasItems && isOpen && item.items && (
        <div className="w-full border-l-2 border-gray-200 ml-2 pl-2">
          {item.items.map((subItem, index) => (
            <MobileMenuItem key={index} item={subItem} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
