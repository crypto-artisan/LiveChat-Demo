const groupByFields = (array: Array<any>, f: any): Array<any> => {
  /*
    params description :
        f : function which returnf the array of fields 
        e.g. :  (item) => {
            return [itemField1, itemField2];
        }
        array : array of data to group e.g. : [{...}, {...}]       
    */
  var groups: { [key: string]: any[] } = {};
  array.forEach((o) => {
    var group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });

  return Object.keys(groups).map((group) => {
    return groups[group];
  });
};

/**
 * split array into chunks
 * @param array - array to split
 * @param chunkSize - chunk size
 * @returns
 */
const splitArray = (array: Array<any>, chunkSize: number) => {
  const chunks = Array(Math.ceil(array.length / chunkSize))
    .fill(1)
    .map((_, index) => index * chunkSize)
    .map((begin) => array.slice(begin, begin + chunkSize));
  return chunks;
};

export { groupByFields, splitArray };
