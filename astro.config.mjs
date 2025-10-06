// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import node from '@astrojs/node';

import { generateSearchIndex } from './src/utils/search.ts';
import { generateSitemap } from './src/utils/sitemap.ts';

export default defineConfig({
  integrations: [generateSearchIndex(), generateSitemap(), react(), sitemap()],
  redirects: {
    '/aboutcompany': '/aboutcompany/about/',
    '/our_services': '/our_services/our_services1/',
    '/articles': '/aboutcompany/articles/',
    '/aboutcompany/news': '/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/nissan_shenker_lodzhistiks_shvecija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/mtju_detrojt_dizel_niderlandi/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/stellazhi_dlja_magazinov/kodin_terra_finljandija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/stellazhi_dlja_magazinov/': '/references/',
    '/references/reshenija_dlja_roznichnih_setej/klinger_danija/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/eda_i_napitki/hartuoll_ab_finljandija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/diy_i_sadovie_centri/agrimarket_finljandija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/iitala_grup_finljandija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/ikea_velikobritanija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/danske_fragtmend_danija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/biltema_shvecija/':
      '/references/',
    '/references/reshenija_dlja_proizvodstva/himija_i_farmacevtika/smit_i_nef_ju_shvejcarija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/dastin_shvecija/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/eda_i_napitki/hening_ol_sen_norvegija/':
      '/references/storing_of_pallets/mobile_pallet_racking/hening_ol_sen_as_norvegija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/cept_jukej_pilsi_velikobritanija/':
      '/references/storing_of_pallets/pallet_racking_standart/cept_jukej_pilsi_velikobritanija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/lg_kemikal_pol_sha/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/lg_kemikal_pol_sha/',
    '/references/reshenija_dlja_torgovih_kompanij/torgovie_kompanii/agrimarket_finljandija/':
      '/references/mezoninnie_sistemi/agrimarket_finljandija/',
    '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/agrimarket_finljandija/':
      '/references/mezoninnie_sistemi/agrimarket_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/stellazhi_dlja_magazinov/agrimarket_finljandija/':
      '/references/mezoninnie_sistemi/agrimarket_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/beko_bil_shvecija/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/beko_bil_shvecija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/beko_bil_shvecija/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/beko_bil_shvecija/',
    '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_karus/berner_oj_finljandija/':
      '/references/storing_of_pallets/pallet_racking_standart/berner_oj_finljandija/',
    '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/berner_oj_finljandija/':
      '/references/storing_of_pallets/pallet_racking_standart/berner_oj_finljandija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_karuseli_paternoster/berner_oj_finljandija/':
      '/references/storing_of_pallets/pallet_racking_standart/berner_oj_finljandija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/berner_oj_finljandija/':
      '/references/storing_of_pallets/pallet_racking_standart/berner_oj_finljandija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/biltema_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/biltema_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/biltema_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/biltema_shvecija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/gorizontal_nie_karuseli_hoca/bol_nichnaja_apteka_v_g_drezden_germani/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_gorizontal_nih_kar/bol_nichnaja_apteka_v_g_drezden_germanij/',
    '/references/storage_of_small_parts/korobochnie_gravitacionnie_stellazhi/vol_vo_pv_shvecija/':
      '/references/storage_of_small_parts/stellazhi_dlja_zoni_otbora/vol_vo_pv_shvecija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/vol_vo_pv_shvecija/':
      '/references/storage_of_small_parts/stellazhi_dlja_zoni_otbora/vol_vo_pv_shvecija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/gorizontal_nie_karuseli_hoca/groe_ag_germanija1/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_gorizontal_nih_kar/groe_ag_germanija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/dani_teh_danija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/dani_teh_danija/',
    '/references/storage_of_small_parts/polochnie_stellazhi/dastin_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/dastin_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/elektronika/dastin_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/dastin_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/dzhula_postorder_ab_shvecija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/dzhula_postorder_ab_shvecija/',
    '/references/storing_of_pallets/pallet_racking_standart/dzhula_postorder_ab_shvecija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/dzhula_postorder_ab_shvecija/',
    '/references/storing_of_pallets/nabivnie_stellazhi_drive_in/dki_lodzhistiks_a_s_danija/':
      '/references/logisticheskie_operatori/dki_lodzhistiks_a_s_danija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_karuseli_paternoster/dom_mestnogo_upravlenija_pol_sha1/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_karus/dom_mestnogo_upravlenija_pol_sha/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/ikea_velikobritanija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/ikea_velikobritanija/',
    '/references/reshenija_dlja_torgovih_kompanij/torgovie_kompanii/ikea_velikobritanija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/ikea_velikobritanija/',
    '/references/reshenija_dlja_torgovih_kompanij/stellazhi_dlja_magazinov/iksel_big_danija/':
      '/references/mezoninnie_sistemi/iksel_big_danija/',
    '/references/reshenija_dlja_torgovih_kompanij/diy_i_sadovie_centri/iksel_big_danija/':
      '/references/mezoninnie_sistemi/iksel_big_danija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/kg_knutson_ab_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/kg_knutson_ab_shvecija/',
    '/references/storage_of_small_parts/polochnie_stellazhi/kg_knutson_ab_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/kg_knutson_ab_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/kg_knutson_ab_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/kg_knutson_ab_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/reshenija_dlja_roznichnih_setej/klinger_danija/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/klinger_danija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/koviston_avto_oj_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/koviston_avto_oj_finljandija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_karuseli_paternoster/koviston_avto_oj_finljandija1/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/koviston_avto_oj_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/koviston_avto_oj_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/koviston_avto_oj_finljandija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/koviston_avto_oj_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/koviston_avto_oj_finljandija/',
    '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_karus/koviston_avto_oj_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/koviston_avto_oj_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/torgovie_kompanii/kodin_terra_finljandija/':
      '/references/mezoninnie_sistemi/kodin_terra_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/diy_i_sadovie_centri/kodin_terra_finljandija/':
      '/references/mezoninnie_sistemi/kodin_terra_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/diy_i_sadovie_centri/kosanit_bel_gija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/kosanit_bel_gija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/kosanit_bel_gija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/kosanit_bel_gija/',
    '/references/reshenija_dlja_torgovih_kompanij/torgovie_kompanii/k_rauta_finljandija/':
      '/references/mezoninnie_sistemi/k_rauta_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/diy_i_sadovie_centri/k_rauta_finljandija/':
      '/references/mezoninnie_sistemi/k_rauta_finljandija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/mansa_avtodele_danija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/mansa_avtodele_danija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/mansa_avtodele_danija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/mansa_avtodele_danija/',
    '/references/reshenija_dlja_torgovih_kompanij/stellazhi_dlja_magazinov/maritim_as_norvegija/':
      '/references/storing_of_pallets/pallet_racking_standart/maritim_as_norvegija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/maritim_as_norvegija/':
      '/references/storing_of_pallets/pallet_racking_standart/maritim_as_norvegija/',
    '/references/reshenija_dlja_torgovih_kompanij/elektronika/maritim_as_norvegija/':
      '/references/storing_of_pallets/pallet_racking_standart/maritim_as_norvegija/',
    '/references/storage_of_small_parts/polochnie_stellazhi/maritim_as_norvegija/':
      '/references/storing_of_pallets/pallet_racking_standart/maritim_as_norvegija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_sir_ja/moens_verpakkingen_bel_gija/':
      '/references/storing_of_pallets/mobile_pallet_racking/moens_verpakkingen_bel_gija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/mtju_detrojt_dizel_niderlandi/':
      '/references/storing_of_pallets/pallet_racking_standart/mtju_detrojt_dizel_niderlandi/',
    '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/mtju_detrojt_dizel_niderlandi/':
      '/references/storing_of_pallets/pallet_racking_standart/mtju_detrojt_dizel_niderlandi/',
    '/references/storage_of_small_parts/polochnie_stellazhi/mtju_detrojt_dizel_niderlandi/':
      '/references/storing_of_pallets/pallet_racking_standart/mtju_detrojt_dizel_niderlandi/',
    '/references/reshenija_dlja_torgovih_kompanij/reshenija_dlja_roznichnih_setej/mul_tilajn_danija/':
      '/references/storing_of_pallets/pallet_racking_standart/mul_tilajn_danija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/muuj_lodzhistiks_niderlandi/':
      '/references/storing_of_pallets/mobile_pallet_racking/muuj_lodzhistiks_niderlandi/',
    '/references/storage_of_small_parts/korobochnie_gravitacionnie_stellazhi/nanso_grup_finljandija/':
      '/references/storing_of_pallets/pallet_flow/nanso_grup_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/torgovie_kompanii/nanso_grup_finljandija/':
      '/references/storing_of_pallets/pallet_flow/nanso_grup_finljandija/',
    '/references/storage_of_small_parts/polochnie_stellazhi/nanso_grup_finljandija/':
      '/references/storing_of_pallets/pallet_flow/nanso_grup_finljandija/',
    '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/nanso_grup_finljandija/':
      '/references/storing_of_pallets/pallet_flow/nanso_grup_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/odezhda_i_obuv/nanso_grup_finljandija/':
      '/references/storing_of_pallets/pallet_flow/nanso_grup_finljandija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/nethandelen_norge_norvegija/':
      '/references/storing_of_pallets/uzkoprohodnie_stellazhi/nethandelen_norge_norvegija/',
    '/references/storing_of_pallets/pallet_racking_standart/nissan_shenker_lodzhistiks_shvecija/':
      '/references/logisticheskie_operatori/nissan_shenker_lodzhistiks_shvecija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/nissan_shenker_lodzhistiks_shvecija/':
      '/references/logisticheskie_operatori/nissan_shenker_lodzhistiks_shvecija/',
    '/references/storage_of_small_parts/polochnie_stellazhi/nissan_shenker_lodzhistiks_shvecija/':
      '/references/logisticheskie_operatori/nissan_shenker_lodzhistiks_shvecija/',
    '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/nissan_shenker_lodzhistiks_shvecija/':
      '/references/logisticheskie_operatori/nissan_shenker_lodzhistiks_shvecija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/nissan_shenker_lodzhistiks_shvecija/':
      '/references/logisticheskie_operatori/nissan_shenker_lodzhistiks_shvecija/',
    '/references/storing_of_pallets/uzkoprohodnie_stellazhi/novo_nordisk_as_danija/':
      '/references/storing_of_pallets/mobile_pallet_racking/novo_nordisk_as_danija/',
    '/references/reshenija_dlja_proizvodstva/himija_i_farmacevtika/novo_nordisk_as_danija/':
      '/references/storing_of_pallets/mobile_pallet_racking/novo_nordisk_as_danija/',
    '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/parker_hannifin_niderlandi/':
      '/references/storing_of_pallets/pallet_racking_standart/parker_hannifin_niderlandi/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/parker_hannifin_niderlandi/':
      '/references/storing_of_pallets/pallet_racking_standart/parker_hannifin_niderlandi/',
    '/references/storage_of_small_parts/polochnie_stellazhi/parker_hannifin_niderlandi/':
      '/references/storing_of_pallets/pallet_racking_standart/parker_hannifin_niderlandi/',
    '/references/reshenija_dlja_torgovih_kompanij/odezhda_i_obuv/polo_ekspressversand_germanija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/polo_ekspressversand_germanija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/polo_ekspressversand_germanija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/polo_ekspressversand_germanija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/polo_ekspressversand_germanija/':
      '/references/storage_of_small_parts/polochnie_stellazhi/polo_ekspressversand_germanija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_karuseli_paternoster/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_karus/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/gorizontal_nie_karuseli_hoca/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_gorizontal_nih_kar/',
    '/references/storage_of_small_parts/polochnie_stellazhi/svegon_ab_shvecija/':
      '/references/storing_of_pallets/mobile_pallet_racking/svegon_ab_shvecija/',
    '/references/storing_of_pallets/pallet_racking_standart/svegon_ab_shvecija/':
      '/references/storing_of_pallets/mobile_pallet_racking/svegon_ab_shvecija/',
    '/references/storage_of_small_parts/stellazhi_dlja_zoni_otbora/svegon_ab_shvecija/':
      '/references/storing_of_pallets/mobile_pallet_racking/svegon_ab_shvecija/',
    '/references/storage_of_small_parts/korobochnie_gravitacionnie_stellazhi/svegon_ab_shvecija/':
      '/references/storing_of_pallets/mobile_pallet_racking/svegon_ab_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/svenska_bil_i_norden_ab_shvecija/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/svenska_bil_i_norden_ab_shvecija/',
    '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_karus/svenska_bil_i_norden_ab_shvecija/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/svenska_bil_i_norden_ab_shvecija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_karuseli_paternoster/svenska_bil_i_norden_ab_shvecija1/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/svenska_bil_i_norden_ab_shvecija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/svenska_bil_i_norden_ab_shvecija/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/svenska_bil_i_norden_ab_shvecija/',
    '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/svenska_bil_i_norden_ab_shvecija/':
      '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/svenska_bil_i_norden_ab_shvecija/',
    '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/servistik_ab_shvecija/':
      '/references/logisticheskie_operatori/servistik_ab_shvecija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/servistik_ab_shvecija/':
      '/references/logisticheskie_operatori/servistik_ab_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/sifild_lodzhistiks_velikobritanija/':
      '/references/storing_of_pallets/pallet_racking_standart/sifild_lodzhistiks_velikobritanija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/skandinavian_ajvea_shvecija1/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/skandinavian_ajvea_shvecija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/stema_inzhiniring_as_danija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/stema_inzhiniring_as_danija/',
    '/references/reshenija_dlja_torgovih_kompanij/reshenija_dlja_roznichnih_setej/stromme_reklame_as_norvegija/':
      '/references/storing_of_pallets/mobile_pallet_racking/stromme_reklame_as_norvegija/',
    '/references/reshenija_dlja_torgovih_kompanij/torgovie_kompanii/stromme_reklame_as_norvegija/':
      '/references/storing_of_pallets/mobile_pallet_racking/stromme_reklame_as_norvegija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/stromme_reklame_as_norvegija/':
      '/references/storing_of_pallets/mobile_pallet_racking/stromme_reklame_as_norvegija/',
    '/references/storing_of_pallets/nabivnie_stellazhi_drive_in/stejpls_germanija/':
      '/references/storing_of_pallets/pallet_racking_standart/stejpls_germanija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/stejpls_germanija/':
      '/references/storing_of_pallets/pallet_racking_standart/stejpls_germanija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/stejpls_germanija/':
      '/references/storing_of_pallets/pallet_racking_standart/stejpls_germanija/',
    '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/stejpls_germanija/':
      '/references/storing_of_pallets/pallet_racking_standart/stejpls_germanija/',
    '/references/storage_of_small_parts/polochnie_stellazhi/stejpls_germanija/':
      '/references/storing_of_pallets/pallet_racking_standart/stejpls_germanija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/tojota_parts_centr_bel_gija/':
      '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/tojota_parts_centr_bel_gija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/tojota_parts_centr_bel_gija/':
      '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/tojota_parts_centr_bel_gija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/fol_ksvagen_shvecija/':
      '/references/mezoninnie_sistemi/fol_ksvagen_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/fol_ksvagen_shvecija/':
      '/references/mezoninnie_sistemi/fol_ksvagen_shvecija/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/fol_ksvagen_shvecija/':
      '/references/mezoninnie_sistemi/fol_ksvagen_shvecija/',
    '/references/storage_of_small_parts/uzkoprohodnie_polochnie_stellazhi/fol_ksvagen_shvecija/':
      '/references/mezoninnie_sistemi/fol_ksvagen_shvecija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/fol_ksvagen_shvecija/':
      '/references/mezoninnie_sistemi/fol_ksvagen_shvecija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/h_kraac_oj_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/h_kraac_oj_finljandija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/h_kraac_oj_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/h_kraac_oj_finljandija/',
    '/references/storing_of_pallets/pallet_racking_standart/hansa_print_finljandija/':
      '/references/storing_of_pallets/pallet_flow/hansa_print_finljandija/',
    '/references/storing_of_pallets/push_back_racking/hansa_print_finljandija/':
      '/references/storing_of_pallets/pallet_flow/hansa_print_finljandija/',
    '/references/storage_of_small_parts/avtomatizirovannij_otbor/hartuoll_ab_finljandija/':
      '/references/storing_of_pallets/uzkoprohodnie_stellazhi/hartuoll_ab_finljandija/',
    '/references/storing_of_pallets/visotnie_stellazhi/hartuoll_ab_finljandija/':
      '/references/storing_of_pallets/uzkoprohodnie_stellazhi/hartuoll_ab_finljandija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_sir_ja/hening_ol_sen_as_norvegija/':
      '/references/storing_of_pallets/mobile_pallet_racking/hening_ol_sen_as_norvegija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/holger_hristiansen_a_s_danija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/holger_hristiansen_a_s_danija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/holger_hristiansen_a_s_danija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/holger_hristiansen_a_s_danija/',
    '/references/reshenija_dlja_torgovih_kompanij/eda_i_napitki/hotlet_bel_gija/':
      '/references/storing_of_pallets/mobile_pallet_racking/hotlet_bel_gija/',
    '/references/storing_of_pallets/nabivnie_stellazhi_drive_in/hutamaki_oj_finljandija/':
      '/references/storing_of_pallets/pallet_flow/hutamaki_oj_finljandija/',
    '/references/storing_of_pallets/push_back_racking/hutamaki_oj_finljandija/':
      '/references/storing_of_pallets/pallet_flow/hutamaki_oj_finljandija/',
    '/references/logisticheskie_operatori/shenker_lodzhistiks_shvecija1/':
      '/references/storing_of_pallets/pallet_racking_standart/shenker_lodzhistiks_shvecija/',
    '/references/storage_of_small_parts/korobochnie_gravitacionnie_stellazhi/shenker_lodzhistiks_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/shenker_lodzhistiks_shvecija/',
    '/references/storage_of_small_parts/stellazhi_dlja_zoni_otbora/shenker_lodzhistiks_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/shenker_lodzhistiks_shvecija/',
    '/references/storage_of_small_parts/uzkoprohodnie_polochnie_stellazhi/shenker_lodzhistiks_shvecija/':
      '/references/storing_of_pallets/pallet_racking_standart/shenker_lodzhistiks_shvecija/',
    '/references/storing_of_pallets/pallet_racking_standart/elektroljuks_distriparts_ab_shvecija/':
      '/references/logisticheskie_operatori/elektroljuks_distriparts_ab_shvecija/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/elektroljuks_distriparts_ab_shvecija/':
      '/references/logisticheskie_operatori/elektroljuks_distriparts_ab_shvecija/',
    '/references/storage_of_small_parts/mnogoetazhnie_polochnie_stellazhi/elektroljuks_distriparts_ab_shvecija/':
      '/references/logisticheskie_operatori/elektroljuks_distriparts_ab_shvecija/',
    '/references/storage_of_small_parts/mobil_nie_polochnie_stellazhi/elektroljuks_distriparts_ab_shvecija/':
      '/references/logisticheskie_operatori/elektroljuks_distriparts_ab_shvecija/',
    '/references/storage_of_small_parts/polochnie_stellazhi/elektroljuks_distriparts_ab_shvecija/':
      '/references/logisticheskie_operatori/elektroljuks_distriparts_ab_shvecija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_karuseli_paternoster/elektroskandija_finljandija1/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/elektroskandija_finljandija/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/vertikal_nie_lifti_tornado/elektroskandija_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/elektroskandija_finljandija/',
    '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_karus/elektroskandija_finljandija/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_lifto/elektroskandija_finljandija/',
    '/references/storing_of_pallets/pallet_racking_standart/enerdzhimidt_danija/':
      '/references/storing_of_pallets/mobile_pallet_racking/enerdzhimidt_danija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_na_proizvodstve/enerdzhimidt_danija/':
      '/references/storing_of_pallets/mobile_pallet_racking/enerdzhimidt_danija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_sir_ja/efdzhej_indastriz_danija/':
      '/references/storing_of_pallets/mobile_pallet_racking/efdzhej_indastriz_danija/',
    '/references/reshenija_dlja_proizvodstva/hranenie_na_proizvodstve/': '/references/',
    '/references/reshenija_dlja_proizvodstva/hranenie_sir_ja/': '/references/',
    '/references/reshenija_dlja_proizvodstva/himija_i_farmacevtika/': '/references/',
    '/references/reshenija_dlja_proizvodstva/hranenie_zapasnih_chastej_k_avtomobiljam/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/distribucionnie_centri/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/diy_i_sadovie_centri/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/eda_i_napitki/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/elektronika/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/odezhda_i_obuv/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/reshenija_dlja_roznichnih_setej/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/torgovie_kompanii/': '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/reshenija_dlja_torgovih_kompanij/':
      '/references/',
    '/references/reshenija_dlja_torgovih_kompanij/zapasnie_chasti_dlja_avtomobilej/':
      '/references/',
    '/references/storage_of_small_parts/avtomatizirovannij_otbor/':
      '/references/storage_of_small_parts/',
    '/references/storage_of_small_parts/korobochnie_gravitacionnie_stellazhi/':
      '/references/storage_of_small_parts/',
    '/references/skladskie_sistemi_dinamicheskogo_hraneni/': '/references/',
    '/references/storage_of_small_parts/uzkoprohodnie_polochnie_stellazhi/': '/references/',
    '/references/storing_of_pallets/nabivnie_stellazhi_drive_in/':
      '/references/storing_of_pallets/',
    '/references/storing_of_pallets/push_back_racking/': '/references/storing_of_pallets/',
    '/references/storing_of_pallets/visotnie_stellazhi/': '/references/storing_of_pallets/',
    '/references/workplace_storage/proekti_s_primeneniem_mezoninnih_stellaz/':
      '/references/workplace_storage/',
    '/images/dialog_images/dialog/fullhd.html/': '/',
    '/products/mezoninnie_sistemi/mezoninnie_system/': '/products/stellazhnij_mezonin/',
    '/products/small_part_handling/domdocument.load/': '/products/',
    '/references/storage_of_small_parts/vertikal_nie_karuseli_paternoster/':
      '/references/storage_of_small_parts/proekti_s_primeneniem_vertikal_nih_karus/',
    '/references/workplace_storage/mezoninnie_sistemi/kosanit_bel_gija/':
      '/references/workplace_storage/',
    '/references/workplace_storage/mezoninnie_sistemi/fol_ksvagen_shvecija/':
      '/references/workplace_storage/',
    '/products/stellazhi/': '/products/',
    '/products/stellazhi/small_part_handling/': '/products/small_part_handling/',
    '/products/stellazhi/konsol_nie_stellazhi/':
      '/products/hranenie_negabaritnih_gruzov/konsol_nie_stellazhi/',
    '/products/stellazhi/stellazhi_dlja_hranenija_shin/':
      '/products/special_nie_konstrukcii/stellazhi_dlja_hranenija_shin/',
    '/products/stellazhi/stellazhi_dlja_magazinov/':
      '/products/special_nie_konstrukcii/stellazhi_dlja_magazinov/',
    '/products/stellazhi/frontal_nie_palletnie_stellazhi_p90/':
      '/products/pallet_handling/frontal_nie_palletnie_stellazhi_p90/',
    '/products/stellazhi/nabivnie_stellazhi_drive_in/':
      '/products/pallet_handling/nabivnie_stellazhi_drive_in/',
    '/products/stellazhi/gravitacionnie_stellazhi_push_bek_push_b/':
      '/products/pallet_handling/gravitacionnie_stellazhi_push_bek_push_b/',
    '/products/stellazhi/gravitacionnie_stellazhi/':
      '/products/pallet_handling/gravitacionnie_stellazhi/',
    '/products/stellazhi/mobil_nie_stellazhi/': '/products/pallet_handling/mobil_nie_stellazhi/',
    '/products/stellazhi/uzkoprohodnie_stellazhi/':
      '/products/pallet_handling/uzkoprohodnie_stellazhi/',
    '/products/stellazhi/korobochnie_gravitacionnie_stellazhi_s90/':
      '/products/small_part_handling/korobochnie_gravitacionnie_stellazhi_s90/',
    '/products/hranenie_negabaritnih_gruzov/konsol_nie_stellazhi/':
      '/products/konsol_nie_stellazhi/',
    '/products/hranenie_negabaritnih_gruzov/': '/products/konsol_nie_stellazhi/',
    '/o-kompanii/rekvizity-kompanii.html/': '/contact_us/',
  },
  site: 'https://stellazhi.by',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
