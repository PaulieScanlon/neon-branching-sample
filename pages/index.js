import React from 'react';

const Page = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

    try {
      await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({ data }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name
          <input type='text' required name='name' />
        </label>
        <label>
          Email Address
          <input type='email' required name='email_address' />
        </label>
        <label>
          Company Website
          <input type='text' required name='company_website' />
        </label>
        <label>
          Company Size
          <select type='text' required name='company_size'>
            <option value='hidden' disabled hidden defaultValue>
              &nbsp;
            </option>
            <option value='1_4'>1-4 employees</option>
            <option value='5_19'>5-19 employees</option>
            <option value='20_99'>20-99 employees</option>
            <option value='100_499'>100-499 employees</option>
            <option value='500'>≥ 500 employees</option>
          </select>
        </label>
        <label>
          Message
          <textarea type='text' name='message' />
        </label>
        <button type='submit'>Send message</button>
      </form>
    </section>
  );
};

export default Page;
