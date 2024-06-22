export function Footer() {
    return (
        <footer>
            <div className='email w-72 bg-red-200'>
                <h3 className='text-white'>Stay updated on News</h3>
                <input className='' type="email" placeholder='Email' id='email' />
                <input type="submit" value="Submit" />
            </div>
        </footer>
    );
}
