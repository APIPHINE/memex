import svg2marker from 'svg2marker';
import * as G from '@antv/g-canvas';
import DEFAULT_ICONS from './inner';

export interface IconType {
  name: string;
  path: string;
}

export interface IconMap {
  [key: string]: { path: string };
}

export default (customIcons: IconType[]) => {
  const CUSTOM_ICONS: IconMap =
    customIcons &&
    customIcons.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.name]: {
          path: curr.path,
        },
      };
    }, {});
  const icons = { ...DEFAULT_ICONS, ...CUSTOM_ICONS };
  Object.keys(icons).forEach((key) => {
    // TODO deprecated hack function
    G.Shape.Marker.Symbols[key as 'circle'] = svg2marker(icons[key].path);
  });
};
