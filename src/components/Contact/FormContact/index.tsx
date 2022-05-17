import { FormEvent } from "react";
import { toast } from "react-toastify";

export default function FormContact(){
	function handleFormSubmit(ev:FormEvent){
		ev.preventDefault();
        
        return toast.error("Dear user, fill in all the information so that we can proceed with the request!");
	}
    return(
        <form 
            id="form-contact" 
            className="w-100 mb-5" 
            onSubmit={handleFormSubmit}
            style={{ maxWidth: 350 }}
        >
            <div className="form-div">
                <label className="required-label" htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="required" placeholder="Your name" maxLength={50} />
            </div>

            <div className="form-div">
                <label className="required-label" htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" className="required" placeholder="Ex.: steven@gmail.com.br" maxLength={50} />
            </div>

            <div className="form-div">
                <label className="required-label" htmlFor="subject">Message:</label>
                <textarea id="subject" name="subject" className="required" placeholder="Your message" rows={7} maxLength={255}></textarea>
            </div>

            <div className="form-div">
                <button type="submit" className="w-100">Send</button>
            </div>
        </form>
    );
}