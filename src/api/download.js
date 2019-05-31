import { $axios } from './axios'

function downLoad (blob, fileName) {
  if ('download' in document.createElement('a')) { // 非IE下载
    const elink = document.createElement('a');

    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else { // IE10+下载
    navigator.msSaveBlob(blob, fileName);
  }
}

function buffer2string (buf) {
  return String.fromCharCode.apply(null, new Int8Array(buf));
}

const exportCommon = (params, type) => {
  return $axios(params).then((res) => {
    let disposition = res.headers['content-disposition'];
    let fileName = null;
    let blob = null;

    if (disposition) {
      fileName = disposition.includes('filename=') ? disposition.split('filename=')[1] : 'export';
      blob = new Blob([res.data], {type: type});
      fileName = decodeURI(fileName);
      downLoad(blob, fileName);
      return {
        Data: [],
        Message: '导出成功',
        ReturnCode: 1
      };
    } else {
      return {
        Data: [],
        Message: '导出失败', // buffer2string(res.data[1]),
        ReturnCode: 0
      };
    }
  });
};

export const exportAttachment = params => {
  let parseObj = {
    url: 'attachment/downloadbyid?itemId=' + params,
    method: 'get',
    responseType: 'arraybuffer',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: [function (data) {
      let ret = '';

      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    }]
  };

  return exportCommon(parseObj, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
};
