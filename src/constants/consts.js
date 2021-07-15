import { Dimensions } from 'react-native';
// export const google_api = 'AIzaSyDoAjhMLWRtJT62MhtNPxcGugVdLFKjMFU'
export const google_api = 'AIzaSyBzBqWxfV31B60jGE0RYlunqv34GYpZ7jY'
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const em = WIDTH / 375;
export const hm = HEIGHT / 667;
export function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
export const mabulColors = { organize: '#FDC641', sell: '#AA87E5', need: '#38C2FF', give: '#34D9B8' };
