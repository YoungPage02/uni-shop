export function getNavList() {
        const { data: res } = uni.$http.get('/api/public/v1/home/catitems')
        console.log(res);
        if (res.meta.status !== 200) return uni.$showMsg()
        return res
      }