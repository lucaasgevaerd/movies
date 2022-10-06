import "./styles.css";
import { useForm } from "react-hook-form";
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';
import 'jquery-validation';
import { useState } from "react";

function Checkout() {
  const { register, handleSubmit, formState: { errors }, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  $(document).ready(function () {
    $("#cpf").mask("999.999.999-99");
  });

  $(document).ready(function () {
    $("#tel").mask("(99) 9 9999-9999");
  });

  $(document).ready(function () {
    $("#cep").mask("99999-999");
  });

  $().ready(function () {
    $('#registerForm').validate({
      rules: {
        firstname: {
          required: true,
          minlength: 3
        },
        lastname: {
          required: true,
          minlength: 3
        },
        cpf: {
          required: true,
          minlength: 14
        },
        email: {
          required: true,
          email: true
        },
        tel: {
          required: true,
          minlength: 16
        },
        cep: {
          required: true,
          minlength: 9
        },
        number: {
          required: true,
          minlength: 1
        }
      },
      messages: {
        firstname: {
          required: 'Please enter your First name',
          minlength: 'Your First name must contain 3 characters'
        },
        lastname: {
          required: 'Please enter your Last name',
          minlength: 'Your Last name must contain 3 characters'
        },
        cpf: {
          required: 'Please enter your CPF',
          minlength: 'Your CPF must contain 11 numbers'
        },
        email: 'Please enter your email',
        tel: {
          required: 'Please enter your phone number',
          minlength: 'Your phone number must contain 11 numbers'
        },
        cep: {
          required: 'Please enter your CEP',
          minlength: 'Your CEP must contain 8 numbers'
        },
        number: {
          required: 'Please enter your home number',
          minlength: 'Your home number must contain at least 1 number'
        },
      }
    })
  })

  const [cep, setCep] = useState({
    bairro: "",
    cep: "",
    localidade: "",
    logradouro: "",
    uf: ""
  });

  const getCEP = async (value: any) => {
    const receivedCep = value.target.value;
    const updatedCep = receivedCep.replace('-', '');
    if (updatedCep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${updatedCep}/json/`);
      const data = await response.json()
      setCep(data);
    }
  }

  return (
    <>
      <main className="checkout-main-container">
        <form onSubmit={handleSubmit(onSubmit)} id={"registerForm"} className='checkout-form-container'>
          <input type="text" id="firstname" name="firstname" placeholder="First name" className="checkout-form-inputs" />
          <input type="text" id="lastname" name="lastname" placeholder="Last name" className="checkout-form-inputs" />
          <input type="text" id="cpf" name="cpf" placeholder="CPF" className="checkout-form-inputs" />
          <input type="email" id="email" name="email" placeholder="Email" className="checkout-form-inputs" />
          <input type="tel" id="tel" name="tel" placeholder="Phone" className="checkout-form-inputs" />
          <input type="text" id="cep" name="cep" placeholder="CEP" className="checkout-form-inputs" onChange={getCEP} />
          <input type="text" name="street" value={cep.logradouro} className="checkout-form-inputs inputs-disabled" placeholder="Street" disabled />
          <input type="text" name="district" value={cep.bairro} className="checkout-form-inputs inputs-disabled" placeholder="District" disabled />
          <input type="text" name="city" value={cep.localidade} className="checkout-form-inputs inputs-disabled" placeholder="City" disabled />
          <input type="text" name="uf" value={cep.uf} className="checkout-form-inputs inputs-disabled" placeholder="UF" disabled />
          <input type="text" id="number" name="number" placeholder="Number" className="checkout-form-inputs" />
          <button type="submit">Finish</button>
        </form>
      </main>
    </>
  );
}

export default Checkout;
