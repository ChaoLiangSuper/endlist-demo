import _ from 'lodash';

export const asyncAdding = (listArray) => {
  const newArray = _.clone(listArray);
  let index = listArray.length + 1;
  while (index <= listArray.length + 30) {
    newArray.push(index);
    index++;
  }

  let promise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(newArray);
    }, 3000);
  });

  return promise;
}
