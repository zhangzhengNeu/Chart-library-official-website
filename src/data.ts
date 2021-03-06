const basic = {
  target: [
    {
      name: '日期',
      key: 'date',
    },
    {
      name: '分享次数',
      key: 'number',
    },
    {
      name: '分享人数',
      key: 'number',
    },
  ],
  source: [
    [
      '2019-09-08',
      '2019-09-07',
      '2019-09-06',
      '2019-09-05',
      '2019-09-04',
      '2019-09-03',
      '2019-09-02',
      '2019-09-01',
      '2019-08-31',
      '2019-08-30',
      '2019-08-29',
      '2019-08-28',
      '2019-08-27',
      '2019-08-26',
      '2019-08-25',
      '2019-08-24',
      '2019-08-23',
      '2019-08-22',
      '2019-08-21',
      '2019-08-20',
      '2019-08-19',
      '2019-08-18',
      '2019-08-17',
      '2019-08-16',
      '2019-08-15',
      '2019-08-14',
      '2019-08-13',
      '2019-08-12',
      '2019-08-11',
      '2019-08-10',
      '2019-08-09',
      '2019-08-08',
      '2019-08-07',
      '2019-08-06',
      '2019-08-05',
      '2019-08-04',
      '2019-08-03',
      '2019-08-02',
      '2019-08-01',
      '2019-07-31',
      '2019-07-30',
      '2019-07-29',
      '2019-07-28',
      '2019-07-27',
      '2019-07-26',
      '2019-07-25',
      '2019-07-24',
      '2019-07-23',
      '2019-07-22',
      '2019-07-21',
      '2019-07-20',
      '2019-07-19',
      '2019-07-18',
      '2019-07-17',
      '2019-07-16',
      '2019-07-15',
      '2019-07-14',
      '2019-07-13',
      '2019-07-12',
      '2019-07-11',
      '2019-07-10',
      '2019-07-09',
      '2019-07-08',
      '2019-07-07',
      '2019-07-06',
      '2019-07-05',
      '2019-07-04',
      '2019-07-03',
      '2019-07-02',
      '2019-07-01',
      '2019-06-30',
      '2019-06-29',
      '2019-06-28',
      '2019-06-27',
      '2019-06-26',
      '2019-06-25',
      '2019-06-24',
      '2019-06-23',
      '2019-06-22',
      '2019-06-21',
      '2019-06-20',
      '2019-06-19',
      '2019-06-18',
      '2019-06-17',
      '2019-06-16',
      '2019-06-15',
      '2019-06-14',
    ],
    [
      6236,
      5595,
      5257,
      7664,
      7449,
      6042,
      5850,
      6729,
      6012,
      5093,
      7952,
      12750,
      8647,
      3761,
      4017,
      3969,
      4187,
      4264,
      3836,
      3915,
      3731,
      4256,
      4476,
      4181,
      4460,
      4039,
      3967,
      4123,
      4612,
      4771,
      4599,
      4153,
      5104,
      4559,
      4791,
      5655,
      4950,
      5317,
      5296,
      5620,
      5174,
      4027,
      3521,
      3215,
      3841,
      3654,
      3042,
      3047,
      3232,
      2503,
      2881,
      2878,
      2742,
      2974,
      2860,
      2680,
      2836,
      2733,
      2906,
      3118,
      3106,
      3246,
      2649,
      2869,
      3140,
      2891,
      3327,
      3412,
      3032,
      2967,
      3379,
      3409,
      3326,
      4037,
      3832,
      3813,
      3489,
      4965,
      5280,
      5252,
      6482,
      4416,
      4744,
      4489,
      5581,
      6022,
      4445,
    ],
    [
      1067,
      1061,
      887,
      901,
      929,
      985,
      918,
      1089,
      1118,
      1108,
      1365,
      1460,
      1325,
      1135,
      1189,
      1121,
      1199,
      1230,
      1224,
      1099,
      1145,
      1271,
      1254,
      1158,
      1178,
      1176,
      1156,
      1199,
      1335,
      1352,
      1303,
      1193,
      1295,
      1254,
      1258,
      1338,
      1290,
      1289,
      1312,
      1301,
      1362,
      1185,
      1007,
      879,
      961,
      1019,
      938,
      900,
      908,
      732,
      784,
      782,
      833,
      808,
      797,
      747,
      793,
      760,
      853,
      870,
      837,
      828,
      806,
      834,
      901,
      810,
      869,
      891,
      885,
      859,
      946,
      948,
      925,
      1009,
      1054,
      1047,
      1011,
      1137,
      1159,
      1104,
      1122,
      1125,
      1049,
      1087,
      1198,
      1235,
      1137,
    ],
  ],
};

const small = {
  target: [
    {
      name: 'dt',
      key: 'date',
    },
    {
      name: 'UV',
      key: 'number',
    },
  ],
  source: [
    [
      '2019-10-23',
      '2019-10-24',
      '2019-10-25',
      '2019-10-26',
      '2019-10-27',
      '2019-10-28',
      '2019-10-29',
    ],
    [12133636, 12546136, 8848043, 9021583, 12764795, 12317394, 12354034],
  ],
};

const big = {
  target: [
    { name: 'dt', key: 'date' },
    { name: '', key: 'string' },
    { name: '1.PlayItemV1', key: 'string' },
    { name: '1.subB', key: 'string' },
    { name: '10.HgylB_root.gylV5TD', key: 'string' },
    { name: '10.ItemG', key: 'string' },
    { name: '10.PlayItemV1', key: 'string' },
    { name: '10.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '10.subB', key: 'string' },
    { name: '11.HotAlbum', key: 'string' },
    { name: '11.ItemG', key: 'string' },
    { name: '11.PlayRAt1', key: 'string' },
    { name: '11.subB', key: 'string' },
    { name: '12.HotAlbum', key: 'string' },
    { name: '12.PlayItemV1', key: 'string' },
    { name: '12.subB', key: 'string' },
    { name: '13.HgylE_root.gylV5TD', key: 'string' },
    { name: '13.HotAlbum', key: 'string' },
    { name: '13.ItemG', key: 'string' },
    { name: '13.PayDetail', key: 'string' },
    { name: '13.PlayItemV1', key: 'string' },
    { name: '13.subB', key: 'string' },
    { name: '14.HotAlbum', key: 'string' },
    { name: '14.PlayItemV1', key: 'string' },
    { name: '14.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '14.subB', key: 'string' },
    { name: '15.HgylB_root.gylV5TD', key: 'string' },
    { name: '15.HotAlbum', key: 'string' },
    { name: '15.PayDetail', key: 'string' },
    { name: '15.PlayItemV1', key: 'string' },
    { name: '15.subB', key: 'string' },
    { name: '16.PayDetail', key: 'string' },
    { name: '16.PlayItemV1', key: 'string' },
    { name: '16.PlayRAt1', key: 'string' },
    { name: '16.PlayRAt2', key: 'string' },
    { name: '16.subB', key: 'string' },
    { name: '17.HgylB_root.gylV5TD', key: 'string' },
    { name: '17.HgylC_root.gylV5TD', key: 'string' },
    { name: '17.ItemG', key: 'string' },
    { name: '17.PlayItemV1', key: 'string' },
    { name: '17.PlayRAt1', key: 'string' },
    { name: '17.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '17.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '17.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '17.subB', key: 'string' },
    { name: '18.HgylG_root.gylV5TD', key: 'string' },
    { name: '18.HotAlbum', key: 'string' },
    { name: '18.ItemG', key: 'string' },
    { name: '18.PlayItemV1', key: 'string' },
    { name: '18.PlayRAt1', key: 'string' },
    { name: '18.PlayRAt2', key: 'string' },
    { name: '18.subB', key: 'string' },
    { name: '19.Hcnzj2_root', key: 'string' },
    { name: '19.HgylC_root.gylV5TD', key: 'string' },
    { name: '19.ItemG', key: 'string' },
    { name: '19.PlayItemV1', key: 'string' },
    { name: '19.PlayRAt2', key: 'string' },
    { name: '19.PlayRAt3', key: 'string' },
    { name: '19.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '19.subB', key: 'string' },
    { name: '2.ItemG', key: 'string' },
    { name: '2.PlayItemV1', key: 'string' },
    { name: '20.Hcnzj2_root', key: 'string' },
    { name: '20.HgylB_root.gylV5TD', key: 'string' },
    { name: '20.HgylC_root.gylV5TD', key: 'string' },
    { name: '20.HotAlbum', key: 'string' },
    { name: '20.ItemG', key: 'string' },
    { name: '20.PlayItemV1', key: 'string' },
    { name: '20.PlayRAt1', key: 'string' },
    { name: '20.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '20.subB', key: 'string' },
    { name: '20.vipD_root.TabVip', key: 'string' },
    { name: '21.AB0918T1.HgylC_root.gylV5TD', key: 'string' },
    { name: '21.Hcnzj2_root', key: 'string' },
    { name: '21.HgylB_root.gylV5TD', key: 'string' },
    { name: '21.HgylE_root.gylV5TD', key: 'string' },
    { name: '21.HgylG_root.gylV5TD', key: 'string' },
    { name: '21.HotAlbum', key: 'string' },
    { name: '21.ItemG', key: 'string' },
    { name: '21.PayDetail', key: 'string' },
    { name: '21.PlayItemV1', key: 'string' },
    { name: '21.PlayRAt1', key: 'string' },
    { name: '21.PlayRAt2', key: 'string' },
    { name: '21.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '21.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '21.subB', key: 'string' },
    { name: '22.FreeUserRec', key: 'string' },
    { name: '22.Hcnzj2_root', key: 'string' },
    { name: '22.HgylB_root.gylV5TD', key: 'string' },
    { name: '22.HgylC_root.gylV5TD', key: 'string' },
    { name: '22.HgylE_root.gylV5TD', key: 'string' },
    { name: '22.HgylG_root.gylV5TD', key: 'string' },
    { name: '22.HotAlbum', key: 'string' },
    { name: '22.ItemG', key: 'string' },
    { name: '22.PayDetail', key: 'string' },
    { name: '22.PlayItemV1', key: 'string' },
    { name: '22.PlayRAt1', key: 'string' },
    { name: '22.PlayRAt2', key: 'string' },
    { name: '22.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '22.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '22.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '22.subB', key: 'string' },
    { name: '23.AB0918T0.HgylC_root.gylV5TD', key: 'string' },
    { name: '23.AB0918T1.HgylC_root.gylV5TD', key: 'string' },
    { name: '23.AB1008T0.vipE_root.TabVip', key: 'string' },
    { name: '23.Hcnzj2_root', key: 'string' },
    { name: '23.HgylB_root.gylV5TD', key: 'string' },
    { name: '23.HgylC_root.gylV5TD', key: 'string' },
    { name: '23.HgylE_root.gylV5TD', key: 'string' },
    { name: '23.HotAlbum', key: 'string' },
    { name: '23.ItemG', key: 'string' },
    { name: '23.PayDetail', key: 'string' },
    { name: '23.PlayItemV1', key: 'string' },
    { name: '23.PlayRAt1', key: 'string' },
    { name: '23.PlayRAt2', key: 'string' },
    { name: '23.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '23.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '23.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '23.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '23.payAB0.hpayC_root.HomeJpV1', key: 'string' },
    { name: '23.payAB1.hpayC_root.HomeJpV1', key: 'string' },
    { name: '23.subB', key: 'string' },
    { name: '23.vipD_root.TabVip', key: 'string' },
    { name: '24.AB0918T0.HgylC_root.gylV5TD', key: 'string' },
    { name: '24.HYgyl_root.HYgyl', key: 'string' },
    { name: '24.Hcnzj2_root', key: 'string' },
    { name: '24.HgylB_root.gylV5TD', key: 'string' },
    { name: '24.HgylE_root.gylV5TD', key: 'string' },
    { name: '24.HgylG_root.gylV5TD', key: 'string' },
    { name: '24.HotAlbum', key: 'string' },
    { name: '24.ItemG', key: 'string' },
    { name: '24.PayDetail', key: 'string' },
    { name: '24.PlayItemV1', key: 'string' },
    { name: '24.PlayRAt1', key: 'string' },
    { name: '24.PlayRAt2', key: 'string' },
    { name: '24.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '24.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '24.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '24.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '24.payAB1.hpayC_root.HomeJpV1', key: 'string' },
    { name: '24.subB', key: 'string' },
    { name: '25.Hcnzj2_root', key: 'string' },
    { name: '25.HgylB_root.gylV5TD', key: 'string' },
    { name: '25.HgylC_root.gylV5TD', key: 'string' },
    { name: '25.HgylG_root.gylV5TD', key: 'string' },
    { name: '25.HotAlbum', key: 'string' },
    { name: '25.ItemG', key: 'string' },
    { name: '25.PayDetail', key: 'string' },
    { name: '25.PlayItemV1', key: 'string' },
    { name: '25.PlayRAt1', key: 'string' },
    { name: '25.PlayRAt2', key: 'string' },
    { name: '25.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '25.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '25.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '25.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '25.payAB0.hpayC_root.HomeJpV1', key: 'string' },
    { name: '25.payAB1.hpayB_root.HomeJpV1', key: 'string' },
    { name: '25.payAB1.hpayC_root.HomeJpV1', key: 'string' },
    { name: '25.subB', key: 'string' },
    { name: '25.vipD_root.TabVip', key: 'string' },
    { name: '26.AB0909T1.vipA_root.TabVip', key: 'string' },
    { name: '26.AB0918T1.HgylC_root.gylV5TD', key: 'string' },
    { name: '26.HTest_root.gylV5TD', key: 'string' },
    { name: '26.Hcnzj2_root', key: 'string' },
    { name: '26.HgylB_root.gylV5TD', key: 'string' },
    { name: '26.HgylC_root.gylV5TD', key: 'string' },
    { name: '26.HgylG_root.gylV5TD', key: 'string' },
    { name: '26.HotAlbum', key: 'string' },
    { name: '26.ItemG', key: 'string' },
    { name: '26.PayDetail', key: 'string' },
    { name: '26.PlayItemV1', key: 'string' },
    { name: '26.PlayRAt1', key: 'string' },
    { name: '26.PlayRAt2', key: 'string' },
    { name: '26.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '26.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '26.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '26.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '26.payAB0.hpayC_root.HomeJpV1', key: 'string' },
    { name: '26.payAB1.hpayC_root.HomeJpV1', key: 'string' },
    { name: '26.subB', key: 'string' },
    { name: '26.vipA_root.TabVip', key: 'string' },
    { name: '26.vipD_root.TabVip', key: 'string' },
    { name: '27.AB0918T0.HgylC_root.gylV5TD', key: 'string' },
    { name: '27.AB1008T0.vipE_root.TabVip', key: 'string' },
    { name: '27.AB1008T1.vipE_root.TabVip', key: 'string' },
    { name: '27.FreeUserRec', key: 'string' },
    { name: '27.Hcnzj2_root', key: 'string' },
    { name: '27.HgylB_root.gylV5TD', key: 'string' },
    { name: '27.HgylC_root.gylV5TD', key: 'string' },
    { name: '27.HotAlbum', key: 'string' },
    { name: '27.ItemG', key: 'string' },
    { name: '27.PayDetail', key: 'string' },
    { name: '27.PlayItemV1', key: 'string' },
    { name: '27.PlayRAt1', key: 'string' },
    { name: '27.PlayRAt2', key: 'string' },
    { name: '27.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '27.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '27.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '27.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '27.payAB1.hpayC_root.HomeJpV1', key: 'string' },
    { name: '27.subB', key: 'string' },
    { name: '27.vipA_root.TabVip', key: 'string' },
    { name: '28.AB0909T0.vipA_root.TabVip', key: 'string' },
    { name: '28.AB1008T0.vipE_root.TabVip', key: 'string' },
    { name: '28.AB1008T1.vipE_root.TabVip', key: 'string' },
    { name: '28.FreeUserRec', key: 'string' },
    { name: '28.Hcnzj2_root', key: 'string' },
    { name: '28.HgylB_root.gylV5TD', key: 'string' },
    { name: '28.HgylC_root.gylV5TD', key: 'string' },
    { name: '28.HotAlbum', key: 'string' },
    { name: '28.ItemG', key: 'string' },
    { name: '28.PayDetail', key: 'string' },
    { name: '28.PlayItemV1', key: 'string' },
    { name: '28.PlayRAt1', key: 'string' },
    { name: '28.PlayRAt2', key: 'string' },
    { name: '28.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '28.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '28.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '28.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '28.payAB0.hpayC_root.HomeJpV1', key: 'string' },
    { name: '28.subB', key: 'string' },
    { name: '28.vipA_root.TabVip', key: 'string' },
    { name: '28.vipD_root.TabVip', key: 'string' },
    { name: '29.AB0909T0.vipA_root.TabVip', key: 'string' },
    { name: '29.AB0918T0.HgylC_root.gylV5TD', key: 'string' },
    { name: '29.AB1008T0.vipE_root.TabVip', key: 'string' },
    { name: '29.AB1008T1.vipE_root.TabVip', key: 'string' },
    { name: '29.FreeUserRec', key: 'string' },
    { name: '29.Hcnzj2_root', key: 'string' },
    { name: '29.HgylB_root.gylV5TD', key: 'string' },
    { name: '29.HgylC_root.gylV5TD', key: 'string' },
    { name: '29.HgylG_root.gylV5TD', key: 'string' },
    { name: '29.HotAlbum', key: 'string' },
    { name: '29.ItemG', key: 'string' },
    { name: '29.PayDetail', key: 'string' },
    { name: '29.PlayItemV1', key: 'string' },
    { name: '29.PlayRAt1', key: 'string' },
    { name: '29.PlayRAt2', key: 'string' },
    { name: '29.gylB_fHomeGylHyh.HomeGylhyh', key: 'string' },
    { name: '29.gylB_fHomeGylM.HomeGylM', key: 'string' },
    { name: '29.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '29.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '29.payAB0.hpayC_root.HomeJpV1', key: 'string' },
    { name: '29.payAB1.hpayB_root.HomeJpV1', key: 'string' },
    { name: '29.payAB1.hpayC_root.HomeJpV1', key: 'string' },
    { name: '29.subB', key: 'string' },
    { name: '29.vipD_root.TabVip', key: 'string' },
    { name: '3.PlayItemV1', key: 'string' },
    { name: '3.subB', key: 'string' },
    { name: '30.PlayItemV1', key: 'string' },
    { name: '30.PlayRAt2', key: 'string' },
    { name: '30.subB', key: 'string' },
    { name: '31.PlayItemV1', key: 'string' },
    { name: '31.subB', key: 'string' },
    { name: '31.vipD_root.TabVip', key: 'string' },
    { name: '4.HgylB_root.gylV5TD', key: 'string' },
    { name: '4.PlayItemV1', key: 'string' },
    { name: '4.hpay_fpayAlbum.HomeJpV1', key: 'string' },
    { name: '4.payAB0.hpayB_root.HomeJpV1', key: 'string' },
    { name: '4.subB', key: 'string' },
    { name: '5.ItemG', key: 'string' },
    { name: '5.PlayItemV1', key: 'string' },
    { name: '5.subB', key: 'string' },
    { name: '6.ItemG', key: 'string' },
    { name: '6.PlayItemV1', key: 'string' },
    { name: '6.subB', key: 'string' },
    { name: '7.PlayItemV1', key: 'string' },
    { name: '7.subB', key: 'string' },
    { name: '8.HgylG_root.gylV5TD', key: 'string' },
    { name: '8.HotAlbum', key: 'string' },
    { name: '8.PlayItemV1', key: 'string' },
    { name: '8.subB', key: 'string' },
    { name: '9.ItemG', key: 'string' },
    { name: '9.PlayItemV1', key: 'string' },
    { name: '9.PlayRAt2', key: 'string' },
    { name: '9.subB', key: 'string' },
    { name: 'FD.ABMCR.1218', key: 'string' },
    { name: 'FD.AMR', key: 'string' },
    { name: 'FD.AMR.1217', key: 'string' },
    { name: 'FD.AMRA', key: 'string' },
    { name: 'FD.AMRA.1241', key: 'string' },
    { name: 'FD.AMRB', key: 'string' },
    { name: 'FD.AMRB.1217', key: 'string' },
    { name: 'FD.AMRB.1241', key: 'string' },
    { name: 'FD.AMRC.1241', key: 'string' },
    { name: 'FD.BAMR', key: 'string' },
    { name: 'FD.ESCR.1311', key: 'string' },
    { name: 'FD.ESNUNR.1901', key: 'string' },
    { name: 'FD.ESR.1951', key: 'string' },
    { name: 'FD.HPV', key: 'string' },
    { name: 'FD.IAR', key: 'string' },
    { name: 'FD.IAR.1312', key: 'string' },
    { name: 'FD.IAR.1312.itds', key: 'string' },
    { name: 'FD.ITR', key: 'string' },
    { name: 'FD.ITR.1313', key: 'string' },
    { name: 'FD.LIVE', key: 'string' },
    { name: 'FD.LIVE.1408', key: 'string' },
    { name: 'FD.LIVEB', key: 'string' },
    { name: 'FD.LIVEB.1408', key: 'string' },
    { name: 'FD.LIVEC', key: 'string' },
    { name: 'FD.LIVEC.1408', key: 'string' },
    { name: 'FD.NUAMR.1240', key: 'string' },
    { name: 'FD.NUNMR', key: 'string' },
    { name: 'FD.NUNMR.1240', key: 'string' },
    { name: 'FD.NUNR.1250', key: 'string' },
    { name: 'FD.NUNR2.1250', key: 'string' },
    { name: 'FD.NUNR3.1250', key: 'string' },
    { name: 'FD.PABMR', key: 'string' },
    { name: 'FD.PABMR.G', key: 'string' },
    { name: 'FD.PABMR.G.1221', key: 'string' },
    { name: 'FD.R', key: 'string' },
    { name: 'FD.R.1210', key: 'string' },
    { name: 'FD.R.1251', key: 'string' },
    { name: 'FD.R.BPR', key: 'string' },
    { name: 'FD.R.BPR.1210', key: 'string' },
    { name: 'FD.R.BPR.1251', key: 'string' },
    { name: 'FD.TDR', key: 'string' },
    { name: 'FD.TPTR.1604', key: 'string' },
    { name: 'FD.TeenagerAlbum.1650', key: 'string' },
    { name: 'FD.TeenagerTrack.1601', key: 'string' },
    { name: 'FD.VIPBOOK.1802', key: 'string' },
    { name: 'FD.VIPCEA.1805', key: 'string' },
    { name: 'FD.VIPCET.1905', key: 'string' },
    { name: 'FD.VIPCTA.1804', key: 'string' },
    { name: 'FD.VIPCTT.1904', key: 'string' },
    { name: 'FD.VIPEA.1808', key: 'string' },
    { name: 'FD.VIPET.1908', key: 'string' },
    { name: 'FD.VIPFA.1807', key: 'string' },
    { name: 'FD.VIPFT.1907', key: 'string' },
    { name: 'FD.VIPHHA.1806', key: 'string' },
    { name: 'FD.VIPHHT.1906', key: 'string' },
    { name: 'FD.VIPR.1803', key: 'string' },
    { name: 'FD.VIPRT.1903', key: 'string' },
    { name: 'PlayItemV1', key: 'string' },
    { name: 'debug', key: 'string' },
    { name: 'feed.rec.1210', key: 'string' },
    { name: 'pushD', key: 'string' },
  ],
  source: [
    [
      '2019-10-26',
      '2019-10-25',
      '2019-10-29',
      '2019-10-24',
      '2019-10-27',
      '2019-10-28',
      '2019-10-23',
    ],
    [73.81, 72.13, 73.27, 71.04, 72.75, 73.17, 74.22],
    [0, 0, 0, 0, 0, 0, 53.45],
    [0, 8.02, 13.92, 9.23, 30.15, 0, 0],
    [42.23, 47.37, 140.22, 212.1, 70.5, 0, 353.35],
    [0, 0, 0, 12, 0, 0, 0],
    [0, 0, 8.43, 44.53, 0, 0, 43.85],
    [0, 0, 0, 31.32, 0, 0, 17.42],
    [5.97, 26.38, 3.03, 12.23, 5.23, 20.14, 0],
    [0, 0, 0, 0, 16.58, 0, 0],
    [303.49, 423.8, 387.93, 577.7, 258, 523.95, 324.3],
    [0, 0, 0, 0, 0, 0, 6.98],
    [0, 0, 23.67, 0, 0, 0, 0],
    [5.83, 203.25, 114.05, 0, 0, 64.25, 0],
    [0, 0, 0, 0, 0, 0, 27.72],
    [8.4, 72.34, 302.9, 83.75, 0, 125.75, 137.54],
    [0, 0, 287.05, 0, 240.07, 943.72, 0],
    [573.78, 521.13, 432, 280.88, 666.85, 797.95, 0],
    [347.93, 85.28, 6.35, 415.01, 0, 53.78, 307.45],
    [0, 0, 0, 0, 0, 0, 13.05],
    [0, 0, 26.5, 0, 23.2, 0, 58.4],
    [71.31, 30.47, 166.2, 245.05, 0, 4.77, 94.47],
    [553.72, 703.23, 560.83, 792.58, 578.63, 425.07, 541.43],
    [0, 8.37, 0, 0, 0, 51.73, 10.6],
    [0, 23.95, 0, 0, 0, 0, 0],
    [36.2, 81.44, 22.06, 86.07, 53.33, 72.58, 37.09],
    [0, 0, 0, 0, 0, 0, 59.78],
    [0, 0, 0, 377.77, 0, 0, 509.02],
    [0, 0, 5.85, 0, 13.67, 0, 0],
    [93.06, 63.93, 79.77, 25.49, 91.34, 40.15, 27.77],
    [32.39, 29.24, 0, 140.36, 91.24, 50.09, 245.22],
    [0, 0, 0, 17.87, 0, 0, 0],
    [352.72, 428.92, 273.07, 197.19, 171.13, 433.88, 124.21],
    [0, 0, 0, 0, 0, 0, 11.13],
    [0, 0, 0, 0, 0, 3.4, 0],
    [75.97, 94.47, 75.75, 38.07, 16.7, 71.19, 66.98],
    [0, 0, 20.02, 44.3, 0, 0, 10.82],
    [28.53, 18.28, 0, 29.83, 61.95, 3.9, 27.22],
    [0, 0, 0, 0, 0, 0, 52.09],
    [22.36, 0, 0, 23.02, 0, 79.78, 26.78],
    [0, 0, 65.58, 0, 0, 0, 0],
    [0, 33.98, 0, 0, 0, 24.77, 0],
    [0, 0, 0, 0, 0, 0, 502.62],
    [0, 1.78, 0, 0, 0, 0, 21],
    [146.53, 166.98, 4.2, 159.62, 0, 12.45, 110.19],
    [0, 26.97, 0, 107.12, 0, 0, 50.8],
    [175.87, 200.02, 250.65, 34.23, 275.9, 150.45, 0],
    [0, 0, 0, 0, 0, 31.03, 0],
    [140.65, 153.48, 269.99, 74.15, 212.35, 428.25, 232.9],
    [18.65, 0, 435.57, 0, 27.68, 99.5, 0],
    [0, 0, 0, 0, 0, 0, 25.33],
    [448.38, 301.39, 163.8, 121.1, 223.25, 225.56, 329.1],
    [584.42, 215.57, 0, 171.25, 23.43, 0, 264.68],
    [0, 0, 0, 0, 0, 0, 20.65],
    [70.91, 524.63, 20.29, 50.31, 62.03, 103.98, 117.1],
    [58.27, 22.49, 69.05, 36.19, 74.52, 106.43, 53.44],
    [0, 0, 0, 0, 14.7, 0, 0],
    [0, 0, 0, 0, 0, 0, 9.45],
    [0, 11.28, 0, 0, 0, 0, 0],
    [167.64, 140.64, 111.76, 89.04, 11.93, 14.18, 28.11],
    [0, 0, 12.7, 0, 0, 0, 0],
    [0, 0, 6.67, 0, 0, 0, 23.04],
    [0, 0, 0, 0, 0, 0, 197.72],
    [1.75, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4.28],
    [96.59, 291.23, 0, 215.71, 70.68, 0, 230.59],
    [515.96, 601.1, 0, 223.57, 111.9, 0, 710.17],
    [75.36, 155.53, 38.11, 269.43, 256.3, 277.87, 297.4],
    [0, 0, 0, 355.87, 0, 0, 1049.2],
    [15.72, 0, 0, 0, 9.23, 0, 0],
    [99.65, 76.25, 65.86, 95.98, 42.3, 70.65, 121.5],
    [201.35, 596.32, 198.78, 178.52, 766.3, 548.42, 80.77],
    [0, 75.43, 0, 0, 0, 0, 0],
    [13.42, 0, 23.27, 47.09, 70.03, 41.9, 77.14],
    [14.15, 0, 0, 14.38, 0, 0, 30.41],
    [0, 0, 0, 0, 0, 0, 208.38],
    [0, 44.34, 0, 0, 0, 0, 0],
    [271.18, 269.57, 0, 255.32, 102.53, 0, 141.77],
    [121.92, 98.93, 0, 151.23, 232.15, 95.04, 250.54],
    [12.02, 0, 0, 0, 12.03, 0, 0],
    [118.98, 73.58, 53.95, 84.25, 126.09, 116.41, 117.28],
    [291.62, 599.23, 618.83, 653.25, 0, 659.17, 306.83],
    [0, 0, 137.68, 263.81, 0, 101.78, 46.12],
    [0, 0, 0, 0, 0, 0, 5.77],
    [0, 50.43, 285.12, 245.23, 0, 588.88, 325.82],
    [139, 107.63, 209.56, 157.87, 173.08, 168.68, 210.93],
    [15.48, 0, 105.23, 0, 0, 42.15, 0],
    [0, 0, 0, 222.68, 0, 0, 308.03],
    [17.33, 17.88, 0, 0, 0, 0, 45.23],
    [0, 0, 0, 0, 0, 0, 12.85],
    [0, 7, 0, 0, 0, 0, 29.22],
    [0, 0, 0, 0, 0, 0, 13.32],
    [430.52, 232.1, 242.73, 443.06, 269.62, 160.52, 104.88],
    [112.58, 143.48, 91.38, 443.5, 239.96, 94.46, 302.47],
    [36.6, 0, 54.38, 10.03, 0, 6.1, 21.79],
    [75.32, 99.68, 109.98, 52.06, 38.25, 41.25, 60.28],
    [0, 23.91, 0, 16.95, 0, 0, 18.74],
    [0, 0, 78.13, 48.19, 0, 0, 106.98],
    [0, 0, 0, 15.2, 0, 0, 296.99],
    [0, 11.77, 0, 0, 0, 0, 15.93],
    [0, 0, 0, 0, 0, 0, 109.79],
    [150.74, 74.47, 117.28, 148.56, 109.99, 133.56, 196.29],
    [0, 12.67, 0, 63.07, 0, 0, 9.73],
    [0, 0, 0, 0, 0, 0, 59.02],
    [0, 0, 0, 219.46, 0, 0, 236.18],
    [69.28, 35.73, 0, 131.39, 0, 0, 74.81],
    [0, 0, 0, 40.42, 10.17, 0, 51.42],
    [0, 0, 0, 84.4, 0, 0, 0],
    [0, 0, 0, 56.92, 0, 7.45, 22.99],
    [0, 0, 0, 197.93, 0, 0, 95.69],
    [650.37, 186.54, 62.26, 183.1, 174.27, 280.95, 361.75],
    [29.58, 0, 8.88, 73.46, 0, 0, 21.93],
    [92.08, 139.34, 145.91, 110.16, 51.09, 141.67, 59.8],
    [86.61, 411.3, 118.92, 160.53, 338.58, 120.1, 73.58],
    [0, 0, 0, 20.33, 0, 39.18, 28.67],
    [0, 37.72, 0, 10.33, 0, 0, 10.97],
    [0, 0, 0, 51.36, 0, 0, 93.96],
    [0, 21.82, 0, 76.48, 0, 0, 20.53],
    [0, 0, 0, 34.08, 0, 0, 11.54],
    [0, 0, 0, 0, 0, 0, 0.6],
    [0, 0, 0, 0, 0, 0, 34.88],
    [136.46, 141.12, 76.55, 144.6, 46.55, 117.79, 111.65],
    [0, 0, 0, 0, 0, 0, 22.36],
    [0, 7.18, 0, 84.62, 0, 0, 0],
    [0, 0, 0, 43.97, 0, 0, 0],
    [565.38, 371.94, 0, 47.21, 80.73, 66.72, 0],
    [69.82, 29.45, 11.47, 28.42, 19.39, 7.62, 0],
    [0, 27.12, 0, 114.45, 0, 0, 0],
    [0, 0, 0, 21.08, 0, 0, 0],
    [84.53, 51.11, 0, 61.26, 0, 78.42, 0],
    [164.08, 278.24, 14.65, 182.03, 483.8, 105.58, 0],
    [10.53, 34.7, 0, 16.42, 0, 0, 0],
    [143.96, 138.29, 162.07, 132.66, 121.63, 47.82, 205.1],
    [0, 0, 0, 47.74, 29.5, 0, 0],
    [14.52, 32.59, 0, 51.97, 0, 0, 0],
    [0, 411.22, 0, 49.08, 11.72, 0, 0],
    [97.53, 148.75, 0, 91.54, 0, 0, 0],
    [13.78, 29.2, 0, 16.68, 49.8, 3, 0],
    [0, 0, 0, 2.78, 0, 0, 0],
    [0, 2.67, 0, 0, 0, 0, 0],
    [40.55, 5.52, 112.21, 98.47, 147.91, 103.2, 199.95],
    [189.62, 90.2, 0, 0, 343.85, 89.53, 0],
    [69.85, 20.18, 0, 0, 101.97, 44.53, 0],
    [0, 40.78, 0, 0, 0, 0, 0],
    [0, 72.13, 0, 0, 0, 0, 0],
    [312.74, 47.89, 689.67, 0, 519.15, 750.13, 0],
    [538.3, 202.92, 559.19, 0, 837.53, 769.94, 0],
    [104.25, 32.22, 0, 0, 24.75, 0, 0],
    [127.53, 46.61, 177.84, 38.98, 83.71, 86.55, 0],
    [12.98, 36.95, 0, 0, 4.4, 0, 0],
    [95.83, 83.17, 0, 0, 226.12, 0, 0],
    [26.08, 97.1, 0, 0, 0, 0, 0],
    [382.74, 66, 0, 0, 547.88, 0, 0],
    [47.85, 23.75, 0, 0, 13.83, 0, 0],
    [0, 5.73, 0, 0, 0, 0, 0],
    [7.33, 12.72, 0, 0, 0, 0, 0],
    [0, 12.77, 0, 0, 60.33, 0, 0],
    [10.93, 0, 0, 0, 0, 0, 0],
    [153.47, 43.55, 137.84, 0, 127.05, 113.64, 99.35],
    [71.17, 16.01, 0, 0, 28.58, 4.88, 0],
    [3.73, 0, 0, 0, 0, 0, 0],
    [36.15, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 11.67, 0, 0],
    [58.72, 0, 409.5, 0, 157.35, 79.18, 0],
    [51.23, 0, 37.83, 0, 33.22, 28.37, 0],
    [14.08, 0, 0, 0, 0, 0, 0],
    [56.05, 0, 0, 0, 113.86, 0, 0],
    [46.45, 0, 113.3, 0, 124.48, 0, 0],
    [159.7, 0, 290.52, 0, 525.99, 409.41, 0],
    [15, 0, 44.27, 0, 36.98, 49.2, 0],
    [56.94, 0, 267.99, 0, 167.85, 216.67, 0],
    [30.16, 0, 0, 0, 31.84, 0, 0],
    [85.27, 0, 0, 0, 18.16, 4.32, 0],
    [65.29, 0, 0, 0, 19.47, 0, 0],
    [100.53, 0, 755.82, 0, 98.4, 457.01, 0],
    [37.6, 0, 0, 0, 34.59, 0, 0],
    [0, 0, 17.33, 0, 0, 0, 0],
    [2.28, 0, 0, 0, 28.07, 0, 0],
    [17.8, 0, 0, 0, 0, 0, 0],
    [54.5, 0, 290.45, 0, 190.19, 277.66, 0],
    [149.57, 0, 0, 0, 372.68, 0, 0],
    [10.53, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 223.42, 0, 0],
    [0, 0, 0, 0, 21.97, 89.52, 0],
    [0, 0, 0, 0, 10.82, 0, 0],
    [0, 0, 0, 0, 93.18, 0, 0],
    [0, 0, 285.41, 0, 93.57, 278.34, 0],
    [0, 0, 47.87, 0, 34.1, 102.18, 0],
    [0, 0, 0, 0, 13.53, 0, 0],
    [0, 0, 0, 0, 39.36, 38.91, 0],
    [0, 85.43, 307.3, 0, 243.39, 471.27, 45.97],
    [0, 0, 19.97, 0, 16.59, 20, 0],
    [0, 0, 104.94, 0, 50.51, 137.44, 0],
    [0, 0, 0, 0, 28.58, 198.5, 0],
    [0, 0, 0, 0, 70.75, 75.71, 0],
    [0, 0, 0, 0, 10.48, 0, 0],
    [0, 0, 0, 0, 48.74, 139.42, 0],
    [0, 0, 0, 0, 25.24, 22.38, 0],
    [0, 0, 0, 0, 7.17, 0, 0],
    [0, 0, 0, 0, 52.22, 0, 0],
    [0, 0, 155.58, 0, 48.25, 164.74, 0],
    [0, 0, 0, 0, 95.3, 135.8, 0],
    [0, 0, 0, 0, 0, 112.78, 0],
    [0, 0, 0, 0, 0, 298.95, 0],
    [0, 0, 76.33, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 28.73, 0],
    [0, 0, 187.25, 0, 0, 84.98, 0],
    [0, 0, 259.45, 0, 0, 22.24, 0],
    [0, 0, 0, 0, 0, 7.68, 0],
    [0, 0, 399.03, 0, 0, 66.91, 0],
    [0, 0, 417.56, 0, 0, 117.05, 0],
    [0, 0, 100.23, 0, 0, 30.59, 0],
    [10.73, 20.58, 118, 49.48, 6.67, 50.57, 0],
    [0, 0, 24.21, 0, 0, 35.73, 0],
    [0, 0, 340.39, 0, 0, 40.41, 0],
    [0, 0, 491.73, 0, 0, 77.87, 0],
    [0, 0, 737.65, 0, 0, 48.39, 0],
    [0, 0, 14.25, 0, 0, 25.23, 0],
    [0, 0, 0, 0, 0, 2.52, 0],
    [0, 0, 0, 0, 0, 63.45, 0],
    [0, 87.6, 136.35, 0, 0, 41.4, 0],
    [0, 0, 0, 0, 0, 26.7, 0],
    [0, 0, 0, 0, 0, 11.53, 0],
    [0, 0, 147.87, 0, 0, 0, 0],
    [0, 0, 6.77, 0, 0, 0, 0],
    [0, 0, 37.75, 0, 0, 0, 0],
    [0, 0, 18.75, 0, 0, 0, 0],
    [0, 0, 216.13, 0, 0, 0, 0],
    [0, 0, 54.09, 0, 0, 0, 0],
    [0, 0, 81.23, 0, 0, 0, 0],
    [0, 0, 25.43, 0, 0, 0, 0],
    [0, 0, 23.58, 0, 0, 0, 0],
    [0, 0, 50.73, 0, 0, 0, 0],
    [0, 0, 179.71, 0, 0, 0, 0],
    [0, 0, 19.19, 0, 0, 0, 0],
    [0, 0, 46.85, 8.73, 0, 0, 0],
    [0, 0, 58.34, 0, 0, 0, 0],
    [0, 0, 48.22, 0, 0, 0, 0],
    [0, 0, 40.31, 0, 0, 0, 0],
    [0, 0, 68.45, 0, 0, 0, 0],
    [0, 0, 7.19, 0, 0, 0, 0],
    [0, 0, 72.12, 0, 0, 0, 0],
    [0, 0, 19.76, 0, 0, 0, 0],
    [0, 0, 22.27, 0, 0, 0, 0],
    [0, 0, 52.18, 0, 0, 0, 0],
    [0, 0, 45.01, 47.8, 56.89, 5.05, 62.64],
    [0, 0, 0.62, 0, 0, 0, 0],
    [0, 0, 0, 10.32, 0, 0, 0],
    [22.88, 116.58, 248.18, 20.64, 25.38, 173.39, 18.51],
    [0, 0, 0, 105.05, 0, 25.55, 126.97],
    [0, 0, 0, 0, 0, 20.62, 0],
    [0, 0, 7.22, 0, 0, 0, 0],
    [0, 34.57, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 25.1, 0, 0],
    [0, 23.88, 0, 18.52, 0, 0, 0],
    [0, 25.05, 0, 0, 0, 0, 0],
    [0, 0, 0, 9.72, 0, 0, 0],
    [0, 8.35, 0, 0, 0, 0, 0],
    [250.27, 91.42, 19.37, 0, 159.6, 29.08, 39.92],
    [117.98, 79.64, 93.06, 114.49, 72.43, 115.38, 26.81],
    [0, 74.15, 0, 6.45, 0, 0, 0],
    [0, 0, 0, 0, 42.82, 39.22, 4.78],
    [3.9, 137.82, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 97.12],
    [0, 10.43, 36.65, 26.82, 17.33, 0, 238.01],
    [0, 0, 0, 0, 113.87, 0, 0],
    [11.88, 38, 3.4, 35.04, 30.58, 38.18, 9.25],
    [18.52, 0, 13.85, 50.8, 18.98, 10.58, 0],
    [0, 21.47, 0, 0, 49.28, 0, 0],
    [0, 163.73, 0, 264.87, 0, 0, 81.39],
    [0, 41, 54.73, 3.82, 15.2, 82.23, 0],
    [34.67, 45.48, 292.09, 0, 94.27, 320.97, 38.99],
    [607.42, 0, 129.38, 0, 388.08, 378.82, 0],
    [0, 0, 57.21, 1.43, 56.98, 44.78, 31.48],
    [0, 0, 0, 179.58, 40.4, 216.58, 89.6],
    [11.64, 0, 0, 0, 43.52, 0, 42.46],
    [176.73, 41.96, 11.05, 250.34, 68.35, 0, 81.14],
    [191.78, 219.43, 221.08, 182.16, 182.96, 169.66, 319.48],
    [162.72, 289.29, 277.87, 133.27, 631.85, 543.12, 135.46],
    [152.85, 203.23, 167.06, 134.67, 116.32, 123.38, 111.85],
    [337.23, 345.61, 351.99, 413.15, 369.92, 374.65, 376.89],
    [96.2, 82.85, 87.13, 73.99, 90.85, 83.78, 85.93],
    [207.09, 176.28, 206.82, 191.99, 161.6, 222.78, 209.75],
    [418.78, 515.5, 331.43, 278.25, 358.98, 363.87, 424.47],
    [104.38, 84.55, 78.09, 87.51, 97.55, 87.33, 81.82],
    [0, 0, 5.82, 0, 0, 0, 0],
    [105.72, 133.41, 70.99, 241.58, 76.02, 101.3, 31.74],
    [190.36, 291.97, 172.48, 522.07, 135.53, 222.27, 367.67],
    [204.93, 186.58, 268.57, 244.94, 204.41, 209.03, 220.39],
    [172.62, 164.34, 165.5, 154.07, 150.13, 150.18, 172.12],
    [41.36, 32.22, 40.44, 46.4, 25.75, 65.74, 62.77],
    [379.81, 430.68, 375.98, 383.25, 397.03, 375.52, 412.5],
    [3.76, 4.37, 34.19, 29.85, 0, 27.88, 41.33],
    [0, 6.53, 0, 5.3, 0, 22.4, 0],
    [90.84, 93.48, 70.68, 67.91, 64.54, 65.14, 91.8],
    [9.12, 0, 0, 0, 29.18, 0, 0],
    [89.86, 146.46, 117.25, 183.24, 106.09, 116.88, 125.5],
    [0.2, 22.93, 0, 90.85, 0, 210.95, 153.6],
    [168.47, 99.96, 125.63, 145.12, 113.53, 100.81, 100.04],
    [2.07, 2.38, 64.64, 7.88, 34.14, 15.72, 0],
    [156.82, 107.66, 137.38, 127.76, 140.87, 144.36, 209.7],
    [237.17, 183.64, 210.07, 170.12, 170.77, 331.92, 305.94],
    [0, 11.73, 0, 0, 0, 0, 0],
    [225.33, 209.25, 187.99, 266.37, 206.74, 224.77, 250.39],
    [61.56, 310.61, 89.55, 214.38, 116.98, 65.11, 88.04],
    [31.89, 24.15, 248.79, 16.78, 26.19, 28.51, 0],
    [0, 0, 14.96, 0, 0, 0, 0],
    [429.28, 158.75, 135.76, 130.65, 122.77, 103.4, 113.07],
    [28.15, 82.03, 105.12, 193.43, 151.29, 229.47, 162.51],
    [549.39, 646.11, 543.56, 571.09, 700.69, 1107.74, 558.02],
    [43.55, 95.18, 41.64, 38.08, 42.18, 12.91, 35.63],
    [54.32, 69.68, 55.36, 63.7, 25.68, 73.6, 81.37],
    [97.94, 145.84, 109.66, 97.6, 128.88, 99.15, 113.27],
    [68.53, 93.18, 54.77, 94.94, 101.2, 100.98, 115.4],
    [0.32, 19.31, 43.08, 20.73, 4.35, 11.45, 12.33],
    [86.16, 146.58, 89.14, 72.57, 185.85, 116.21, 150.83],
    [0, 0, 0, 0, 0, 5.44, 8.77],
    [32.51, 32.76, 26.4, 26.59, 37.07, 31.61, 28.41],
    [140.7, 140.01, 153.82, 267.5, 410.89, 305.25, 438.2],
    [42.62, 28.11, 59.2, 39.94, 27.67, 33.49, 38.75],
    [12.06, 34.84, 73.32, 155.06, 65.58, 144.5, 87.34],
    [0.37, 3.65, 0, 0, 43.85, 0, 0],
    [11.58, 4.77, 0, 21.55, 0.4, 8.8, 10.61],
    [373.73, 93.69, 24.71, 4.27, 14.84, 85.87, 243.56],
    [22.4, 310.56, 50.36, 77.2, 61.65, 63.97, 92.08],
    [0, 0, 0, 0, 7.57, 0.45, 22.95],
    [0, 0, 17.93, 105.63, 133.72, 5.37, 14.73],
    [0, 0, 0, 30.02, 0, 12.22, 0],
    [158.23, 25.23, 30.18, 16.82, 45.38, 21.9, 18.52],
    [4.35, 47.42, 2.13, 0, 4.58, 0, 31.36],
    [22.46, 49.52, 29, 18.62, 30.72, 210.53, 54.51],
    [48.2, 75.65, 124.68, 109.37, 73.58, 82.92, 106.91],
    [44.41, 52.23, 62.76, 42.31, 49.53, 41.03, 50.4],
    [0, 0, 17.03, 0, 0, 0, 0],
    [100.45, 59.39, 111.13, 160.26, 72.54, 79.73, 124.56],
    [0, 0, 0, 6.35, 0, 0, 0],
    [89.18, 61.77, 68.34, 113.25, 121.49, 103.9, 98.22],
  ],
};

export default {
  basic,
  small,
  big
}