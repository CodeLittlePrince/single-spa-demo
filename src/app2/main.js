export function bootstrap(props) {
  console.log('app2 bootstrap')
  console.log(props)

  return Promise.resolve()
}

export function mount(props) {
  console.log('app2 mount')
  console.log(props)

  document.getElementById('single-spa-application:app2').innerHTML = `
    <h1>hello app2</h1>
    <div id="single-spa-application:parcel"></div>
  `
  props.mountParcel(
    () => import('/src/parcel/main.js'),
    { domElement: document.getElementById('single-spa-application:parcel') }
  )
  
  return Promise.resolve()
}

export function unmount(props) {
  console.log('app2 unmount')
  console.log(props)

  document.getElementById('single-spa-application:app2').innerHTML = ``

  return Promise.resolve()
}