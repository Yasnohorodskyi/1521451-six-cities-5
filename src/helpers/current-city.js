export const currentCity = function(offers){
  const url = window.location.href.split('/');
  const type = parseInt(url[4]) ? parseInt(url[4]) : url[4];

      switch(typeof type){
        case 'number':
          let cur = offers.filter(offer => offer.id == type)[0].city;
          return cur;
        case 'undefined':
          return (url[3]) ?  url[3] : `Amsterdam`
        default:
      }
}
