const data = {
  target: [
    {
      name: '日期',
      key: 'date',
    },
    {
      name: '百分比',
      key: 'number',
    },
  ],
};

const d = [
  { __all__: 0.0601, time: 1592924280000 },
  { __all__: 0.0624, time: 1592924340000 },
  { __all__: 0.0626, time: 1592924400000 },
  { __all__: 0.0622, time: 1592924460000 },
  { __all__: 0.0622, time: 1592924520000 },
  { __all__: 0.0619, time: 1592924580000 },
  { __all__: 0.0606, time: 1592924640000 },
  { __all__: 0.0612, time: 1592924700000 },
  { __all__: 0.0615, time: 1592924760000 },
  { __all__: 0.0603, time: 1592924820000 },
  { __all__: 0.0623, time: 1592924880000 },
  { __all__: 0.0602, time: 1592924940000 },
  { __all__: 0.0579, time: 1592925000000 },
  { __all__: 0.0567, time: 1592925060000 },
  { __all__: 0.0603, time: 1592925120000 },
  { __all__: 0.061, time: 1592925180000 },
  { __all__: 0.0587, time: 1592925240000 },
  { __all__: 0.0727, time: 1592925300000 },
  { __all__: 0.0592, time: 1592925360000 },
  { __all__: 0.0606, time: 1592925420000 },
  { __all__: 0.0605, time: 1592925480000 },
  { __all__: 0.0573, time: 1592925540000 },
  { __all__: 0.0614, time: 1592925600000 },
  { __all__: 0.058, time: 1592925660000 },
  { __all__: 0.0598, time: 1592925720000 },
  { __all__: 0.0556, time: 1592925780000 },
  { __all__: 0.0568, time: 1592925840000 },
  { __all__: 0.0579, time: 1592925900000 },
  { __all__: 0.0567, time: 1592925960000 },
  { __all__: 0.0567, time: 1592926020000 },
  { __all__: 0.0583, time: 1592926080000 },
  { __all__: 0.0597, time: 1592926140000 },
  { __all__: 0.0577, time: 1592926200000 },
  { __all__: 0.0564, time: 1592926260000 },
  { __all__: 0.0588, time: 1592926320000 },
  { __all__: 0.0576, time: 1592926380000 },
  { __all__: 0.0571, time: 1592926440000 },
  { __all__: 0.0562, time: 1592926500000 },
  { __all__: 0.0575, time: 1592926560000 },
  { __all__: 0.059, time: 1592926620000 },
  { __all__: 0.054, time: 1592926680000 },
  { __all__: 0.0573, time: 1592926740000 },
  { __all__: 0.054, time: 1592926800000 },
  { __all__: 0.0556, time: 1592926860000 },
  { __all__: 0.0573, time: 1592926920000 },
  { __all__: 0.0548, time: 1592926980000 },
  { __all__: 0.054, time: 1592927040000 },
  { __all__: 0.0583, time: 1592927100000 },
  { __all__: 0.0562, time: 1592927160000 },
  { __all__: 0.0574, time: 1592927220000 },
  { __all__: 0.056, time: 1592927280000 },
  { __all__: 0.0586, time: 1592927340000 },
  { __all__: 0.0609, time: 1592927400000 },
  { __all__: 0.0541, time: 1592927460000 },
  { __all__: 0.0563, time: 1592927520000 },
  { __all__: 0.0569, time: 1592927580000 },
  { __all__: 0.058, time: 1592927640000 },
  { __all__: 0.0583, time: 1592927700000 },
  { __all__: 0.0554, time: 1592927760000 },
  { __all__: 0.0545, time: 1592927820000 },
  { __all__: 0.05881, time: 1592927880000 },
  { __all__: 0.0618, time: 1592927940000 },
  { __all__: 0.0631, time: 1592928000000 },
  { __all__: 0.0616, time: 1592928060000 },
  { __all__: 0.061, time: 1592928120000 },
  { __all__: 0.0624, time: 1592928180000 },
  { __all__: 0.0612, time: 1592928240000 },
  { __all__: 0.059, time: 1592928300000 },
  { __all__: 0.0614, time: 1592928360000 },
  { __all__: 0.0605, time: 1592928420000 },
  { __all__: 0.0603, time: 1592928480000 },
  { __all__: 0.064, time: 1592928540000 },
  { __all__: 0.0593, time: 1592928600000 },
  { __all__: 0.0591, time: 1592928660000 },
  { __all__: 0.0604, time: 1592928720000 },
  { __all__: 0.0599, time: 1592928780000 },
  { __all__: 0.0608, time: 1592928840000 },
  { __all__: 0.06, time: 1592928900000 },
  { __all__: 0.0614, time: 1592928960000 },
  { __all__: 0.0604, time: 1592929020000 },
  { __all__: 0.0619, time: 1592929080000 },
  { __all__: 0.061, time: 1592929140000 },
  { __all__: 0.058, time: 1592929200000 },
  { __all__: 0.0581, time: 1592929260000 },
  { __all__: 0.0643, time: 1592929320000 },
];

data.source = [d.map(i => i.time), d.map(i => i.__all__)];

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '时间轴格式化',
  type: 'line-peak',
  formatters: {
    date: (value) => {
      return rocketChart.echarts.format.formatTime('yyyy-M-d hh:mm', value)
    }
  },
  datasetParams: {
    $timeAxis: {
      show: true,
      // 时间粒度：y/M/d/h/m/s，默认d
      grain: 'm',
    },
    $renderLabel: {
      type: '.1percent',
    },
  },
  option: {
    grid: {
      right: 50
    }
  },
  // 时间格式可以为时间戳或时间字符串
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
