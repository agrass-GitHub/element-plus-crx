export default function mockHttp(url: string, { page, size }: any) {

  return new Promise((resolve) => {
    const res = { data: {}, msg: '', code: 200 } as any
    if (url == '/mock/table') {
      res.data.list = Array.from({ length: size }).map((v, i) => {
        return {
          name: 'Tom' + (((page - 1) * size) + (i + 1)),
          date: '2016-05-03',
          address: 'No. 189, Grove St, Los Angeles',
        }
      })
      res.data.total = 100
    }
    setTimeout(() => resolve(res), 1500);
  })
  
}