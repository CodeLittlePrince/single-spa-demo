window.hello = '123'

export function bootstrap(props) {
  console.log('app1 bootstrap')
  console.log(props)

  return Promise.resolve()
}

export function mount(props) {
  console.log('app1 mount')
  console.log(props)

  document.getElementById('single-spa-application:app1').innerHTML = `
    <h1>hello app1</h1>
  `

  return Promise.resolve()
}

export function unmount(props) {
  console.log('app1 unmount')
  console.log(props)

  document.getElementById('single-spa-application:app1').innerHTML = ``

  return Promise.resolve()
}