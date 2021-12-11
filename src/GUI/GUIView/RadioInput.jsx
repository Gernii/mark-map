const RadioInput = ({label, value, checked, setter}) => {
	return (
		<li>
	  <label>
	    <input 
			 	id='check'
				type='radio' 
				value = 'value'
				checked= {checked === value}
	      onChange={() => setter(value)} 
			/>
	    <span className={checked === value? 'checked value': 'value'}>{label}</span>
	  </label>
		</li>
	);
};

export default RadioInput