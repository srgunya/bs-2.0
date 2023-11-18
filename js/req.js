function loadItem() {
    fetch('/' + encodeURI("qq"))
        .then(res => res.text())
        .then(res => {
            console.log(res)
        })
}

setTimeout(loadItem(), 2000)
