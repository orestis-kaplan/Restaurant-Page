/*jshint esversion: 6 */
import menuImage from '../assets/img/menu.jpg';
// Construct all the contents of the tabs

// Home tab
const home = () =>
{
  return `
    <p style="color: #282525;padding: 13px;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      euismod dui ac sapien faucibus, at rutrum sapien fringilla.
      Nullam quis sapien a tellus ullamcorper semper sit amet eget ante.
      Aliquam convallis, ipsum vitae lobortis lacinia, nibh leo fermentum
      leo, eget ornare ante nisi ac nulla. Donec hendrerit sit amet velit
      ut bibendum. Pellentesque suscipit finibus pulvinar. Duis imperdiet
      in nisl ut tincidunt. Aliquam ornare leo vel vehicula semper.
      In rhoncus eros sed quam ultrices, eu molestie tellus porttitor.
      Quisque non justo bibendum, interdum arcu ut, ullamcorper odio.
      Aliquam erat volutpat.
    </p>
  `;
};

// About tab
const about = () =>
{
  return `
    <p style="color: #282525;padding: 13px;">
      Mauris facilisis arcu bibendum malesuada fermentum. Donec suscipit, enim
      at faucibus aliquam, est enim aliquet lectus, eget dictum ligula elit
      ac mi. Sed laoreet tellus enim, in volutpat elit gravida in. Fusce sit
      amet urna ipsum. Morbi sollicitudin fermentum feugiat. Nunc est dui,
      finibus ut tempus sed, tincidunt ut ante. Nam posuere tellus libero,
      ac ultrices est gravida a. Fusce nulla lectus, dictum eu tempus ac,
      tristique non purus. Sed vel libero et velit molestie vehicula et ut arcu.
      Aenean venenatis mauris sed viverra laoreet. Phasellus sed erat porta
      metus feugiat rhoncus.
    </p>
  `;
};

// Menu tab
const menu = () =>
{
  return `
    <img src="${menuImage}" width ="100%"></img>
  `;
};

// Contact tab
const contact = () =>
{
  return `
    <p style="color: #282525;padding: 13px;">
     Nunc feugiat nulla enim. Morbi sit amet dui eu nunc lacinia mollis.
     Vestibulum sed nunc ac dui viverra fringilla. In hac habitasse platea
     dictumst. Quisque et turpis nunc. Proin tristique finibus tortor in
     convallis. Nulla aliquam turpis urna, et tristique lacus semper ut.
     In viverra sed odio lacinia convallis. Aliquam imperdiet diam quam, non
     interdum sem sagittis sed. Suspendisse sem dolor, mollis vitae elit et,
     lacinia viverra ex. Pellentesque sodales pellentesque convallis. Lorem
     ipsum dolor sit amet, consectetur adipiscing elit. Nunc et consequat lacus,
     ut pharetra eros. Nunc vel ipsum risus. Curabitur pellentesque venenatis
     ultrices.
    <p>
  `;
};

export {home,about,menu,contact};
