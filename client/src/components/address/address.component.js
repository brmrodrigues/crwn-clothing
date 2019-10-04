import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import { searchCepStart } from '../../redux/user/user.actions';

const Address = ({ handleChange, searchCepStart }) => {
	const [address, setAddress] = useState({
		cep: '',
		street: '',
		number: '',
		district: '',
		city: '',
		state: '',
		complement: '',
	});

	const { cep, street, number, district, city, state, complement } = address;

	const handleCepChange = cep => {
		const cepOnlyDigits = cep.replace(/\D/g, '');
		if (cepOnlyDigits !== '') {
			const cepRegExp = /^[0-9]{8}$/;
			if (cepRegExp.test(cepOnlyDigits)) {
				searchCepStart({ cepOnlyDigits });
			} else {
				alert('CEP inválido');
			}
		}
	};

	return (
		<div className='address'>
			<FormInput
				type='text'
				name='cep'
				value={cep}
				onChange={handleCepChange}
				label='CEP'
				required
			/>
			<FormInput
				type='text'
				name='street'
				value={street}
				onChange={handleChange}
				label='Rua'
				required
			/>
			<FormInput
				type='text'
				name='number'
				value={number}
				onChange={handleChange}
				label='Número'
				required
			/>
			<FormInput
				type='text'
				name='district'
				value={district}
				onChange={handleChange}
				label='Bairro'
				required
			/>
			<FormInput
				type='text'
				name='city'
				value={city}
				onChange={handleChange}
				label='Cidade'
				required
			/>
			<FormInput
				type='text'
				name='state'
				value={state}
				onChange={handleChange}
				label='Estado'
				required
			/>
			<FormInput
				type='text'
				name='complement'
				value={complement}
				onChange={handleChange}
				label='Complemento'
			/>
		</div>

	);
};

const mapDispatchToProps = dispatch => ({
	searchCepStart: cep => dispatch(searchCepStart(cep))
})

export default connect(null, mapDispatchToProps)(Address);
