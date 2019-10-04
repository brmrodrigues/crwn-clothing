import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart, searchCepStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';
import { selectCurrentAddress } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const SignUp = ({ signUpStart, searchCepStart, address }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cep: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
    complement: '',
  });

  useEffect(() => {
    if (address) {
      setUserCredentials({
        ...userCredentials,
        cep: address.cep,
        street: address.street,
        district: address.district,
        city: address.city,
        state: address.state,
      });
    }
    // eslint-disable-next-line
  }, [address]);

  const { displayName, email, password, confirmPassword, cep, street, number, district, city, state, complement } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password, confirmPassword, cep, street, number, district, city, state, complement });
  };

  const handleChange = event => {
    console.log('handleChange');
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleCepChange = () => {
    const cepOnlyDigits = cep.toString().replace(/\D/g, '');
    if (cepOnlyDigits !== '') {
      const cepRegExp = /^[0-9]{8}$/;
      if (cepRegExp.test(cepOnlyDigits)) {
        searchCepStart(cepOnlyDigits);
      } else {
        alert('CEP inválido');
      }
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>
        Ainda não tenho uma conta
        </h2>
      <span>Cadastre-se com um e-mail e senha</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Apelido'
          required
        />
        <FormInput
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          label='E-mail'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Senha'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirme a senha'
          required
        />
        <FormInput
          type='text'
          name='cep'
          value={cep}
          onChange={handleChange}
          onBlur={handleCepChange}
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
        <CustomButton type='submit'>CADASTRAR</CustomButton>
      </form>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
  searchCepStart: cep => dispatch(searchCepStart(cep))

});

const mapStateToProps = createStructuredSelector({
  address: selectCurrentAddress
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);