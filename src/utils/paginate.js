import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    //calculate the starting index of the item on this page 
    const startIndex = (pageNumber - 1) * pageSize;

    //go to loadash and take all the items on this page 

    return _(items).slice(startIndex).take(pageSize).value();

    //_.slice(items, startIndex);
    //_.take()
}