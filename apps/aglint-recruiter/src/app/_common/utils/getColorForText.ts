import * as radixColors from '@radix-ui/colors';

const colors = [
  { bg: radixColors.amber.amber3, text: radixColors.amber.amber11 },
  { bg: radixColors.blue.blue3, text: radixColors.blue.blue11 },
  { bg: radixColors.bronze.bronze3, text: radixColors.bronze.bronze11 },
  { bg: radixColors.brown.brown3, text: radixColors.brown.brown11 },
  { bg: radixColors.crimson.crimson3, text: radixColors.crimson.crimson11 },
  { bg: radixColors.cyan.cyan3, text: radixColors.cyan.cyan11 },
  { bg: radixColors.gold.gold3, text: radixColors.gold.gold11 },
  { bg: radixColors.grass.grass3, text: radixColors.grass.grass11 },
  { bg: radixColors.gray.gray3, text: radixColors.gray.gray11 },
  { bg: radixColors.green.green3, text: radixColors.green.green11 },
  { bg: radixColors.indigo.indigo3, text: radixColors.indigo.indigo11 },
  { bg: radixColors.lime.lime3, text: radixColors.lime.lime11 },
  { bg: radixColors.mint.mint3, text: radixColors.mint.mint11 },
  { bg: radixColors.orange.orange3, text: radixColors.orange.orange11 },
  { bg: radixColors.pink.pink3, text: radixColors.pink.pink11 },
  { bg: radixColors.purple.purple3, text: radixColors.purple.purple11 },
  { bg: radixColors.plum.plum3, text: radixColors.plum.plum11 },
  { bg: radixColors.red.red3, text: radixColors.red.red11 },
  { bg: radixColors.sage.sage3, text: radixColors.sage.sage11 },
  { bg: radixColors.sand.sand3, text: radixColors.sand.sand11 },
  { bg: radixColors.sky.sky3, text: radixColors.sky.sky11 },
  { bg: radixColors.slate.slate3, text: radixColors.slate.slate11 },
  { bg: radixColors.teal.teal3, text: radixColors.teal.teal11 },
  { bg: radixColors.tomato.tomato3, text: radixColors.tomato.tomato11 },
  { bg: radixColors.violet.violet3, text: radixColors.violet.violet11 },
  { bg: radixColors.yellow.yellow3, text: radixColors.yellow.yellow11 },
];

export const getStringColor = (index: number) => colors[index % colors.length];