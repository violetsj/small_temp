import fly from "./http"

class Apis {
  test() {
    return fly.get('json1811.ashx', {
      v: '1562741994036',
      c: "NewIndexController",
      m: "index"
    })
  }
  getfood() {
    return fly.request('/customer/common/page/food/choose?ver=v2', {
      admin_id: "88997",
      lwm_appid: "dh129ahsd9898123gjhjfamnxoo1",
      food_type: 1,
      shop_id: 374933,
      from_type: 1
    }, {
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
  }

  list(index) {
    return fly.request('/customer/crm/communion/comment/list', {
      shop_id: 374933,
      lwm_sess_token: 'od1kiuminl24fhebkrgf9l06l0',
      lwm_appid: 'dh129ahsd9898123gjhjfamnxoo1',
      admin_id: 88997,
      page: 0,
      num: 20,
      tag: index,
      timestamp: 1562848530,
      nonce: 19892,
      sign: 'C2B86B37FD9BCA05903C3B4305C58993'

    }, {
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
  }

  info() {
    return fly.request('/customer/common/shop/shop/info?ver=v2', {
      shop_id: 374933,
      lwm_appid: 'dh129ahsd9898123gjhjfamnxoo1',
      admin_id: 88997,
      nonce: 29623,
      from_type: 1
    }, {
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
  }



}
export default new Apis();
