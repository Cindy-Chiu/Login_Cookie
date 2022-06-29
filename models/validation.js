const users = require('./users.json').results

function validation(email,password) { //使用者輸入的帳密是否正確
  let index = users.findIndex(key => key.email === email)
  if(index === -1){
    
    return [false, 'Username not found! Please try again!']
  }else if(users[index].password !== password){
    
    return [false, 'Invalid Password! Please try again!']
  }else {
    return [true, users[index].firstName]
  }
}

module.exports = validation