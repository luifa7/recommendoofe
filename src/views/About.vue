<template>
  <!-- Header-->
  <header class="py-5">
    <div class="container px-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xxl-6">
          <div class="text-center my-5">
            <h1 class="fw-bolder mb-3">
              Our mission is to make recommendations cozy for everyone.
            </h1>
            <p class="lead fw-normal text-muted mb-4">
              Recommendoo was built on the idea that quality, personal and
              dedicated recommendations has more value than anonymus ratings.
              Use our web-app to improve your relation to the recommendations
              you follow.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- About section one-->
  <section class="py-5 bg-light" id="scroll-target">
    <div class="container px-5 my-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6">
          <img
            class="img-fluid rounded mb-5 mb-lg-0"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Wikimedia_2018-20_Recommendation_09_final.svg/350px-Wikimedia_2018-20_Recommendation_09_final.svg.png"
            alt="..."
          />
        </div>
        <div class="col-lg-6">
          <h2 class="fw-bolder">
            Share your recommendations with people you know
          </h2>
          <p class="lead fw-normal text-muted mb-0">
            Visit new places and share your experiences there. Recommend that
            cool restaurant, or that innovativ hotel to your friends. Hey, you
            could also let your friends now about that new kicker hall or the
            bes equipped boulder salon!
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- About section two-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6 order-first order-lg-last">
          <img
            class="img-fluid rounded mb-5 mb-lg-0"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wikimedia_2018-20_Recommendation_06_final.svg/350px-Wikimedia_2018-20_Recommendation_06_final.svg.png"
            alt="..."
          />
        </div>
        <div class="col-lg-6">
          <h2 class="fw-bolder">I know someone who knows someone!</h2>
          <p class="lead fw-normal text-muted mb-0">
            If you travel to paris but none of your contacts have been there no
            problem! You cann see in your contacts tree is someone in your
            network know someone who has been there! Send a request and expand
            your network!
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- About section three-->
  <section class="py-5 bg-light" id="scroll-target">
    <div class="container px-5 my-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6">
          <img
            class="img-fluid rounded mb-5 mb-lg-0"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wikimedia_2018-20_Recommendation_04_final.svg/350px-Wikimedia_2018-20_Recommendation_04_final.svg.png"
            alt="..."
          />
        </div>
        <div class="col-lg-6">
          <h2 class="fw-bolder">This is YOUR place</h2>
          <p class="lead fw-normal text-muted mb-0">
            You dont have to reed fake reviews, or maybe recommendations from
            someone with no idea about your taste. Is that place a 5 or a 2?
            Depends on you, and only your friends know your tastes better than
            anyone else! Keep this place as your trustful place.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Team members section-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h2 class="fw-bolder">Our team</h2>
        <p class="lead fw-normal text-muted mb-5">
          Dedicated to quality and success
        </p>
      </div>
      <div
        class="
          row
          gx-5
          row-cols-1 row-cols-sm-2 row-cols-xl-4
          justify-content-center
        "
      >
        <div class="col mb-5 mb-5 mb-xl-0">
          <div class="text-center">
            <img
              class="img-fluid rounded-circle mb-4 px-4"
              src="data:image/webp;base64,UklGRkYEAABXRUJQVlA4IDoEAABQFACdASpgAGAAPpE+mkglo6KhK5YsKLASCWUA1DW1GJ/WWZ06L7f5fQPLlMK98aHLznAsx8P4bc4urzNQdyqTZ8396qMokBqKu4J0i+iyhLl5zlSzbxmosGgWlQSZ/SBi/VAtnB9/KMKpgEce2uF66HNBjjdmL1YMMFJPaVyhJL5TqZtVwiuZwSSsMFdq+Mkb+YiMbKrXqhNc//yzKxJDIzvBOzci5p69/yAA/vfQpc/9IKsXNbG5OLMbUDw9JnSfiqaKXQm26PqF3jjqTdKYpd7MBGYt7XLIUpVUPPhAJqxE0q7FL4IG8KyNufaxaJDpZv8IgaUCr5HlSJ+P5W6rPQj15mz/V/QXQGRbesJLPeSfGyWbsUXP1nPOYYATO5uPOjiaG2XSZYYKgDHdVjo3iAm4SXGs5mymTqISRngQ1FPnHqpg+Bf2inYgSVHkp4OdVHFmBaJ/HK0pu2MMpIkoNZvqe8Sf2m/ochOT2Fx/t2xs2EP1vHsCv+FGgUuYi/q1Et5QIi4nA91zZkgvr1GkEXUUpNA/iWTIJU7RjBvoG8rGyU7Pnnk4HboPxvTZozh2csx6j72qrbSLfJRBr5ySk4mCXN/dOgb9wT4iIku2HYr4+UA9dGQJClMtT9eCHRV+pEuO0yjvMCHnI8rj9djStBCE0cbgPcD15tmilIt97nFchxPvh8/wpHTrzw0zEcpQXa4oHQ6uxV5mkCPFNMlGr9EIGUT1jHOFnpr6P5ahlb+VymIFP5qyQPiEHCMX24FGhqrw6aVFsDpgrEPrt1rK/1hL3oZQzTP1jpi2KgjhgQNow/+gsLKSRMd7dFCVQo/T6bJrfwJk2z0qpfpE8b3vTUcuwlB7u5Bms+YIVi1iIdX8P0qLLcoVB9+BmeICrir+ffDOkowXm/Ak5EEq6vZ8bfXh5sp2xaIy1ADyAEtvgzy6+ZtGY7hIcgGvljnMg/QXnpNBMx+JA5PV8Tc4yTB18cHgCIUUeuBS5xh93H4MdA74j9dVg5akOQvd9gAfkT4V/677efEYhjCHKdHzScjxLbGdt96n5tbqjqH7AwmJFEQwOKe9H6cefhtM1akrwx5el2a9WqDI/2G/UdSi0ItA+8XZf729830sSK9vLukqMUj4VuhHFbuXBSMmgg4xM+mqbOoyl6S9Zm0Pfd5wIEyy78KvmG9U8ZcZL6NjwCwRMRmZWuJkP6J7ZPSi9gAv6StPGVx62pqYKy/sILQEkCkhs+qwXwz5UT+X88A/awlzUO5ISOYOV6+0fAIrITD9XwvBcQS25WvMJSza2mLxlhfSenSbMB/A64BRPf0RgjZZ4CupT9SAJgK7LtWyBwJcXEkTQpPG7JzssAUurM+mX0H0aUkGPZniFLaubBQ4N2n0sKLxo9jnR2OZlLgKiBGBjSmeBBVkB3PJ8jhOhenO/LLGpQHbDH8C1wAAAA=="
              alt="..."
            />
            <h5 class="fw-bolder">Lyaksandro Kaleva Góðoysson</h5>
            <div class="fst-italic text-muted">Founder &amp; CEO</div>
          </div>
        </div>
        <div class="col mb-5 mb-5 mb-xl-0">
          <div class="text-center">
            <img
              class="img-fluid rounded-circle mb-4 px-4"
              src="data:image/webp;base64,UklGRkYEAABXRUJQVlA4IDoEAABQFACdASpgAGAAPpE+mkglo6KhK5YsKLASCWUA1DW1GJ/WWZ06L7f5fQPLlMK98aHLznAsx8P4bc4urzNQdyqTZ8396qMokBqKu4J0i+iyhLl5zlSzbxmosGgWlQSZ/SBi/VAtnB9/KMKpgEce2uF66HNBjjdmL1YMMFJPaVyhJL5TqZtVwiuZwSSsMFdq+Mkb+YiMbKrXqhNc//yzKxJDIzvBOzci5p69/yAA/vfQpc/9IKsXNbG5OLMbUDw9JnSfiqaKXQm26PqF3jjqTdKYpd7MBGYt7XLIUpVUPPhAJqxE0q7FL4IG8KyNufaxaJDpZv8IgaUCr5HlSJ+P5W6rPQj15mz/V/QXQGRbesJLPeSfGyWbsUXP1nPOYYATO5uPOjiaG2XSZYYKgDHdVjo3iAm4SXGs5mymTqISRngQ1FPnHqpg+Bf2inYgSVHkp4OdVHFmBaJ/HK0pu2MMpIkoNZvqe8Sf2m/ochOT2Fx/t2xs2EP1vHsCv+FGgUuYi/q1Et5QIi4nA91zZkgvr1GkEXUUpNA/iWTIJU7RjBvoG8rGyU7Pnnk4HboPxvTZozh2csx6j72qrbSLfJRBr5ySk4mCXN/dOgb9wT4iIku2HYr4+UA9dGQJClMtT9eCHRV+pEuO0yjvMCHnI8rj9djStBCE0cbgPcD15tmilIt97nFchxPvh8/wpHTrzw0zEcpQXa4oHQ6uxV5mkCPFNMlGr9EIGUT1jHOFnpr6P5ahlb+VymIFP5qyQPiEHCMX24FGhqrw6aVFsDpgrEPrt1rK/1hL3oZQzTP1jpi2KgjhgQNow/+gsLKSRMd7dFCVQo/T6bJrfwJk2z0qpfpE8b3vTUcuwlB7u5Bms+YIVi1iIdX8P0qLLcoVB9+BmeICrir+ffDOkowXm/Ak5EEq6vZ8bfXh5sp2xaIy1ADyAEtvgzy6+ZtGY7hIcgGvljnMg/QXnpNBMx+JA5PV8Tc4yTB18cHgCIUUeuBS5xh93H4MdA74j9dVg5akOQvd9gAfkT4V/677efEYhjCHKdHzScjxLbGdt96n5tbqjqH7AwmJFEQwOKe9H6cefhtM1akrwx5el2a9WqDI/2G/UdSi0ItA+8XZf729830sSK9vLukqMUj4VuhHFbuXBSMmgg4xM+mqbOoyl6S9Zm0Pfd5wIEyy78KvmG9U8ZcZL6NjwCwRMRmZWuJkP6J7ZPSi9gAv6StPGVx62pqYKy/sILQEkCkhs+qwXwz5UT+X88A/awlzUO5ISOYOV6+0fAIrITD9XwvBcQS25WvMJSza2mLxlhfSenSbMB/A64BRPf0RgjZZ4CupT9SAJgK7LtWyBwJcXEkTQpPG7JzssAUurM+mX0H0aUkGPZniFLaubBQ4N2n0sKLxo9jnR2OZlLgKiBGBjSmeBBVkB3PJ8jhOhenO/LLGpQHbDH8C1wAAAA=="
              alt="..."
            />
            <h5 class="fw-bolder">Луіфа Ґодої</h5>
            <div class="fst-italic text-muted">Developer</div>
          </div>
        </div>
        <div class="col mb-5 mb-5 mb-xl-0">
          <div class="text-center">
            <img
              class="img-fluid rounded-circle mb-4 px-4"
              src="data:image/webp;base64,UklGRkYEAABXRUJQVlA4IDoEAABQFACdASpgAGAAPpE+mkglo6KhK5YsKLASCWUA1DW1GJ/WWZ06L7f5fQPLlMK98aHLznAsx8P4bc4urzNQdyqTZ8396qMokBqKu4J0i+iyhLl5zlSzbxmosGgWlQSZ/SBi/VAtnB9/KMKpgEce2uF66HNBjjdmL1YMMFJPaVyhJL5TqZtVwiuZwSSsMFdq+Mkb+YiMbKrXqhNc//yzKxJDIzvBOzci5p69/yAA/vfQpc/9IKsXNbG5OLMbUDw9JnSfiqaKXQm26PqF3jjqTdKYpd7MBGYt7XLIUpVUPPhAJqxE0q7FL4IG8KyNufaxaJDpZv8IgaUCr5HlSJ+P5W6rPQj15mz/V/QXQGRbesJLPeSfGyWbsUXP1nPOYYATO5uPOjiaG2XSZYYKgDHdVjo3iAm4SXGs5mymTqISRngQ1FPnHqpg+Bf2inYgSVHkp4OdVHFmBaJ/HK0pu2MMpIkoNZvqe8Sf2m/ochOT2Fx/t2xs2EP1vHsCv+FGgUuYi/q1Et5QIi4nA91zZkgvr1GkEXUUpNA/iWTIJU7RjBvoG8rGyU7Pnnk4HboPxvTZozh2csx6j72qrbSLfJRBr5ySk4mCXN/dOgb9wT4iIku2HYr4+UA9dGQJClMtT9eCHRV+pEuO0yjvMCHnI8rj9djStBCE0cbgPcD15tmilIt97nFchxPvh8/wpHTrzw0zEcpQXa4oHQ6uxV5mkCPFNMlGr9EIGUT1jHOFnpr6P5ahlb+VymIFP5qyQPiEHCMX24FGhqrw6aVFsDpgrEPrt1rK/1hL3oZQzTP1jpi2KgjhgQNow/+gsLKSRMd7dFCVQo/T6bJrfwJk2z0qpfpE8b3vTUcuwlB7u5Bms+YIVi1iIdX8P0qLLcoVB9+BmeICrir+ffDOkowXm/Ak5EEq6vZ8bfXh5sp2xaIy1ADyAEtvgzy6+ZtGY7hIcgGvljnMg/QXnpNBMx+JA5PV8Tc4yTB18cHgCIUUeuBS5xh93H4MdA74j9dVg5akOQvd9gAfkT4V/677efEYhjCHKdHzScjxLbGdt96n5tbqjqH7AwmJFEQwOKe9H6cefhtM1akrwx5el2a9WqDI/2G/UdSi0ItA+8XZf729830sSK9vLukqMUj4VuhHFbuXBSMmgg4xM+mqbOoyl6S9Zm0Pfd5wIEyy78KvmG9U8ZcZL6NjwCwRMRmZWuJkP6J7ZPSi9gAv6StPGVx62pqYKy/sILQEkCkhs+qwXwz5UT+X88A/awlzUO5ISOYOV6+0fAIrITD9XwvBcQS25WvMJSza2mLxlhfSenSbMB/A64BRPf0RgjZZ4CupT9SAJgK7LtWyBwJcXEkTQpPG7JzssAUurM+mX0H0aUkGPZniFLaubBQ4N2n0sKLxo9jnR2OZlLgKiBGBjSmeBBVkB3PJ8jhOhenO/LLGpQHbDH8C1wAAAA=="
              alt="..."
            />
            <h5 class="fw-bolder">Luifa Godoy</h5>
            <div class="fst-italic text-muted">UX Design</div>
          </div>
        </div>
        <div class="col mb-5 mb-5 mb-xl-0">
          <div class="text-center">
            <img
              class="img-fluid rounded-circle mb-4 px-4"
              src="data:image/webp;base64,UklGRkYEAABXRUJQVlA4IDoEAABQFACdASpgAGAAPpE+mkglo6KhK5YsKLASCWUA1DW1GJ/WWZ06L7f5fQPLlMK98aHLznAsx8P4bc4urzNQdyqTZ8396qMokBqKu4J0i+iyhLl5zlSzbxmosGgWlQSZ/SBi/VAtnB9/KMKpgEce2uF66HNBjjdmL1YMMFJPaVyhJL5TqZtVwiuZwSSsMFdq+Mkb+YiMbKrXqhNc//yzKxJDIzvBOzci5p69/yAA/vfQpc/9IKsXNbG5OLMbUDw9JnSfiqaKXQm26PqF3jjqTdKYpd7MBGYt7XLIUpVUPPhAJqxE0q7FL4IG8KyNufaxaJDpZv8IgaUCr5HlSJ+P5W6rPQj15mz/V/QXQGRbesJLPeSfGyWbsUXP1nPOYYATO5uPOjiaG2XSZYYKgDHdVjo3iAm4SXGs5mymTqISRngQ1FPnHqpg+Bf2inYgSVHkp4OdVHFmBaJ/HK0pu2MMpIkoNZvqe8Sf2m/ochOT2Fx/t2xs2EP1vHsCv+FGgUuYi/q1Et5QIi4nA91zZkgvr1GkEXUUpNA/iWTIJU7RjBvoG8rGyU7Pnnk4HboPxvTZozh2csx6j72qrbSLfJRBr5ySk4mCXN/dOgb9wT4iIku2HYr4+UA9dGQJClMtT9eCHRV+pEuO0yjvMCHnI8rj9djStBCE0cbgPcD15tmilIt97nFchxPvh8/wpHTrzw0zEcpQXa4oHQ6uxV5mkCPFNMlGr9EIGUT1jHOFnpr6P5ahlb+VymIFP5qyQPiEHCMX24FGhqrw6aVFsDpgrEPrt1rK/1hL3oZQzTP1jpi2KgjhgQNow/+gsLKSRMd7dFCVQo/T6bJrfwJk2z0qpfpE8b3vTUcuwlB7u5Bms+YIVi1iIdX8P0qLLcoVB9+BmeICrir+ffDOkowXm/Ak5EEq6vZ8bfXh5sp2xaIy1ADyAEtvgzy6+ZtGY7hIcgGvljnMg/QXnpNBMx+JA5PV8Tc4yTB18cHgCIUUeuBS5xh93H4MdA74j9dVg5akOQvd9gAfkT4V/677efEYhjCHKdHzScjxLbGdt96n5tbqjqH7AwmJFEQwOKe9H6cefhtM1akrwx5el2a9WqDI/2G/UdSi0ItA+8XZf729830sSK9vLukqMUj4VuhHFbuXBSMmgg4xM+mqbOoyl6S9Zm0Pfd5wIEyy78KvmG9U8ZcZL6NjwCwRMRmZWuJkP6J7ZPSi9gAv6StPGVx62pqYKy/sILQEkCkhs+qwXwz5UT+X88A/awlzUO5ISOYOV6+0fAIrITD9XwvBcQS25WvMJSza2mLxlhfSenSbMB/A64BRPf0RgjZZ4CupT9SAJgK7LtWyBwJcXEkTQpPG7JzssAUurM+mX0H0aUkGPZniFLaubBQ4N2n0sKLxo9jnR2OZlLgKiBGBjSmeBBVkB3PJ8jhOhenO/LLGpQHbDH8C1wAAAA=="
              alt="..."
            />
            <h5 class="fw-bolder">Luis Alvarez</h5>
            <div class="fst-italic text-muted">Marketing</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
