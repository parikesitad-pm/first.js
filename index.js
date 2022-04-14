const output = [];

const postDatas = [
  {
    id: 1,
    title: "mandirian jadi digital",
    body: "Bank Mandiri digital banking",
  },
  {
    id: 2,
    title: "BSI Merger",
    body: "Bank Syariah merger jadi BSI",
  },
];

const commentDatas = [
  {
    postId: 1,
    id: 1,
    comment: "manntapps",
  },
  {
    postId: 2,
    id: 2,
    comment: "Jos BSI",
  },
];

for (let i of postDatas) {
  for (let x of commentDatas) {
    if (i.id === x.postId) {
      const obj = {
        title: i.title,
        body: i.body,
        comment: x.comment,
      };
      output.push(obj);
    }
  }
}
console.log(output);
