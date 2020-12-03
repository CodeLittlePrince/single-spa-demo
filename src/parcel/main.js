export function mount(props) {
  console.log('parcel mount')
  console.log(props)

  document.getElementById('single-spa-application:parcel').innerHTML = `
    <h1>hello parcel</h1>
  `

  return Promise.resolve()
}

export function unmount(props) {
  console.log('parcel unmount')
  console.log(props)

  document.getElementById('single-spa-application:parcel').innerHTML = ``

  return Promise.resolve()
}