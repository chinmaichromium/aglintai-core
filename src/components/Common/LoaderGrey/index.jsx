import { useLottie } from 'lottie-react';
import React from 'react';

function LoaderGrey() {
  const options = {
    animationData: {
      nm: 'icn-loader',
      ddd: 0,
      h: 81,
      w: 81,
      meta: { g: '@lottiefiles/toolkit-js 0.26.1' },
      layers: [
        {
          ty: 4,
          nm: 'circle-blue',
          sr: 1,
          st: 0,
          op: 1800,
          ip: 0,
          hd: false,
          ddd: 0,
          bm: 0,
          hasMask: false,
          ao: 0,
          ks: {
            a: { a: 0, k: [37.5, 37.5, 0], ix: 1 },
            s: { a: 0, k: [100, 100, 100], ix: 6 },
            sk: { a: 0, k: 0 },
            p: { a: 0, k: [40.5, 40.5, 0], ix: 2 },
            r: {
              a: 1,
              k: [
                {
                  o: { x: 0.167, y: 0.167 },
                  i: { x: 0.833, y: 0.833 },
                  s: [0],
                  t: 0,
                },
                { s: [360], t: 120 },
              ],
              ix: 10,
            },
            sa: { a: 0, k: 0 },
            o: { a: 0, k: 100, ix: 11 },
          },
          ef: [],
          shapes: [
            {
              ty: 'gr',
              bm: 0,
              hd: false,
              mn: 'ADBE Vector Group',
              nm: 'Group 1',
              ix: 1,
              cix: 2,
              np: 2,
              it: [
                {
                  ty: 'sh',
                  bm: 0,
                  hd: false,
                  mn: 'ADBE Vector Shape - Group',
                  nm: 'Path 1',
                  ix: 1,
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      c: true,
                      i: [
                        [-19.054, 0],
                        [0, -19.054],
                        [19.054, 0],
                        [0, 19.054],
                      ],
                      o: [
                        [19.054, 0],
                        [0, 19.054],
                        [-19.054, 0],
                        [0, -19.054],
                      ],
                      v: [
                        [0, -34.5],
                        [34.5, 0],
                        [0, 34.5],
                        [-34.5, 0],
                      ],
                    },
                    ix: 2,
                  },
                },
                {
                  ty: 'st',
                  bm: 0,
                  hd: false,
                  mn: 'ADBE Vector Graphic - Stroke',
                  nm: 'Stroke 1',
                  lc: 2,
                  lj: 2,
                  ml: 1,
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 8, ix: 5 },
                  c: { a: 0, k: [0.7608, 0.7843, 0.8], ix: 3 },
                },
                {
                  ty: 'tr',
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  sk: { a: 0, k: 0, ix: 4 },
                  p: { a: 0, k: [37.5, 37.5], ix: 2 },
                  r: { a: 0, k: 0, ix: 6 },
                  sa: { a: 0, k: 0, ix: 5 },
                  o: { a: 0, k: 100, ix: 7 },
                },
              ],
            },
            {
              ty: 'tm',
              bm: 0,
              hd: false,
              mn: 'ADBE Vector Filter - Trim',
              nm: 'Trim Paths 1',
              ix: 2,
              e: {
                a: 1,
                k: [
                  {
                    o: { x: 0.581, y: 0 },
                    i: { x: 0.262, y: 1 },
                    s: [0],
                    t: 0,
                  },
                  { s: [100], t: 120 },
                ],
                ix: 2,
              },
              o: { a: 0, k: 0, ix: 3 },
              s: {
                a: 1,
                k: [
                  {
                    o: { x: 0.333, y: 0 },
                    i: { x: 0.123, y: 1 },
                    s: [0],
                    t: 0,
                  },
                  { s: [100], t: 120 },
                ],
                ix: 1,
              },
              m: 1,
            },
          ],
          ind: 1,
        },
      ],
      v: '5.5.1',
      fr: 60,
      op: 120,
      ip: 0,
      assets: [],
    },
    loop: true,
  };

  const { View } = useLottie(options);
  return <div>{View}</div>;
}

export default LoaderGrey;
