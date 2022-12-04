import React from 'react'
import "./freetrial.css";


const Freetrial = () => {
  return (
    <div className='tops'>
    <div className="top">
          <h6 className='top1'>
           <img width="148" height="100%" src="https://code-assets-0.whjr.online/images/whitehatLogo.svg" alt='pic' className="top2"/>
            </h6>
            </div>
            <div className='top3'>
            <span className='top4'>Book Your Free class</span>
            </div>
            <div className='top3'>
            <span className='top5'>Limited Spots Left!</span>
            </div>
            <section>
            <select class="top6" aria-invalid="false" id="countryDialCode" required>
                                                          <option value="+91_IN">+91</option>                                    
                                                          <option value="+93_AF">Afghanistan +93</option>
                                                          <option value="+358_AX">Aland Island +358</option>
                                                          <option value="+61_AU">Australia +61</option>
                                                          <option value="+880_BD">Bangladesh +880</option>
                                                          <option value="+1246_BB">Barbados +1246</option>
                                                          <option value="+33_FR">France +33</option>
                                                          <option value="+91_IN">India +91</option>
                                                          <option value="+64_NZ">New Zealand +64</option>
                                                          <option value="+92_PK">Pakistan +92</option>
                                                          <option value="+7_RU">Russia +7</option>
                                                      </select>


            <input type="tel" id="phoneNumber" placeholder='Enter Your Number' class="top7" />
            <label class="form-label" for="phoneNumber"></label>
            </section>
            <section>
                <div className='top8'>
                By clicking the 'Schedule a FREE Class' button you agree to Whitehat Jr Terms & Conditions, acknowledge that you have read the Privacy Policy and to receive calls and text from, or on behalf of, Whitehat Jr at the number you provided, including for marketing purposes and by autodialer. Email to opt-out. Your consent is not a condition of any purchase.
                </div>
            </section>

            <section>
                <button isloading="false" className='top9' type="button">
                    <div className='top10'>Schedule a Free Class</div>
                </button>
            </section>
            </div>


  );
};

export default Freetrial;