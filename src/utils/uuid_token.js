import { v4 as uuid4 } from 'uuid'
//要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = () => {
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if (!uuid_token) {
        uuid_token = uuid4()
        localStorage.setItem('UUIDTOKEN', uuid_token)
    }
    return uuid_token
}
