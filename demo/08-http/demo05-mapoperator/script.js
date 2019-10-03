let demoInput = document.querySelector('#demo')

let obs = Rx.Observable.fromEvent(demoInput, 'input')
  .map(e => e.target.value)
  .map(v => {
    return {
      value: v,
      length: v.length + 10
    };
});

obs.subscribe(value => console.log(value));
