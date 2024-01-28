/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
function phaseOne() {
  const body = "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    const reqOptions = {
	method: 'POST',
	headers: {
	    "Content-Type": "application/x-www-form-urlencoded"
	},
    body
    }
    fetch('/products', reqOptions)
	.then(res => res.text())
	.then(res => console.log(res))
	.catch(err => console.log(err))
}
phaseOne()


/* ============================== Phase 2 ============================== */

// Your code here
function phaseTwo() {
  const body = "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    const reqOptions = {
	method: 'POST',
	headers: {
	    "Content-Type": "application/x-www-form-urlencoded"
	},
    body
    }
    fetch('/products', reqOptions)
	.then(res => {
	    console.log(res.status);
	    console.log(res.headers.get('content-Type'));
	    console.log(res.url)
	})
    //.then(res => console.log(res))
	.catch(err => console.log(err))
}

// N/B: fetch follows the redirection route from the server, checking the res.url field would let me know the redirected url
phaseTwo()


/* ============================== Phase 3 ============================== */

// Your code here
function phaseThree() {
    const body = new URLSearchParams({
	name: 'Carribean Delight COffee',
	description: 'Made by Manatee Coffee',
	price: 11.99,
	categories: 'grocery'
    });
  
    const reqOptions = {
	method: 'POST',
	headers: {
	    "Content-Type": "application/x-www-form-urlencoded"
	},
    body
    }
    fetch('/products', reqOptions)
	.then(res => {
	    console.log(res.status);
	    console.log(res.headers.get('content-Type'));
	    console.log(res.url);
	    console.log(res.redirected);
	    console.log(res.url
		       )
	})
    //.then(res => console.log(res))
	.catch(err => console.log(err))
}
phaseThree()
