import React, { ChangeEvent, useState } from 'react';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { FieldForm } from '../../../molecules/FieldForm';
import { Image } from '../../../atoms/Image';
import profile_example from './assets/profile_example.svg';
import './MixModifyUserForm.scss';
import { TextAreaForm } from '../../../molecules/TextAreaForm';
import { Profile } from '../../../../../../domain/models/Profile';
import { profileService } from '../../../../../../domain/services/Profile.service';
import formatRoles, { CheckInterface } from './types';
import { useCorrectFormat } from '../../../../../hooks/useCorrectFormat';

export const MixModifyUserForm: React.FC<{}> = () => {
  const { check, data, checkIsAllowedValue } = useCorrectFormat();
  // const [data, setData] = useState<Profile>({
  //   name: '',
  //   surname: '',
  //   birthDate: '',
  //   phoneNumber: '',
  //   email: '',
  //   province: '',
  //   zipCode: '',
  //   town: '',
  //   address: '',
  //   island: '',
  //   twitter: '',
  //   instagram: '',
  //   linkedin: '',
  //   additionalInformation: '',
  // });
  // const [check, setCheck] = useState<CheckInterface>({
  //   name: '',
  //   surname: '',
  //   birthDate: '',
  //   phoneNumber: '',
  //   email: '',
  //   province: '',
  //   zipCode: '',
  //   town: '',
  //   address: '',
  //   island: '',
  //   twitter: '',
  //   instagram: '',
  //   linkedin: '',
  //   additionalInformation: '',
  // });

  const [cvButtonClass, setCvButtonClass] = useState('cv-button');

  const handleChange = () => {
    setCvButtonClass('cv-button uploaded');
  };

  // const checkIsAllowedValue: (
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => void = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const minLength: number = 3;
  //   const maxLength: number = 30;
  //   const inputValue = event.target.value;
  //   const nameEvent = event.target.name;
  //
  //   switch (nameEvent) {
  //     case 'email':
  //       if (formatRoles.regexEmail.test(inputValue)) {
  //         setCheck({ ...check, email: 'correct' });
  //         setData({ ...data, email: inputValue });
  //       } else {
  //         setCheck({ ...check, email: 'incorrect' });
  //       }
  //       break;
  //     case 'name':
  //       if (
  //         formatRoles.regexOnlyText.test(inputValue) &&
  //         inputValue.length >= minLength &&
  //         inputValue.length <= maxLength
  //       ) {
  //         setCheck({ ...check, name: 'correct' });
  //         setData({ ...data, name: inputValue });
  //       } else {
  //         setCheck({ ...check, name: 'incorrect' });
  //       }
  //       break;
  //     case 'surname':
  //       if (
  //         formatRoles.regexOnlyText.test(inputValue) &&
  //         inputValue.length >= minLength &&
  //         inputValue.length <= maxLength
  //       ) {
  //         setCheck({ ...check, surname: 'correct' });
  //         setData({ ...data, surname: inputValue });
  //       } else {
  //         setCheck({ ...check, surname: 'incorrect' });
  //       }
  //       break;
  //     case 'birthday':
  //       if (formatRoles.regexDate.test(inputValue)) {
  //         setCheck({ ...check, birthDate: 'correct' });
  //         setData({ ...data, birthDate: inputValue });
  //       } else {
  //         setCheck({ ...check, birthDate: 'incorrect' });
  //       }
  //       break;
  //     case 'phoneNumber':
  //       if (formatRoles.regexPhone.test(inputValue)) {
  //         setCheck({ ...check, phoneNumber: 'correct' });
  //         setData({ ...data, phoneNumber: inputValue });
  //       } else {
  //         setCheck({ ...check, phoneNumber: 'incorrect' });
  //       }
  //       break;
  //     case 'zipcode':
  //       if (formatRoles.regexZipcode.test(inputValue)) {
  //         setCheck({ ...check, zipCode: 'correct' });
  //         setData({ ...data, zipCode: inputValue });
  //       } else {
  //         setCheck({ ...check, zipCode: 'incorrect' });
  //       }
  //       break;
  //     case 'island':
  //       if (formatRoles.regexOnlyText.test(inputValue)) {
  //         setCheck({ ...check, island: 'correct' });
  //         setData({ ...data, island: inputValue });
  //       } else {
  //         setCheck({ ...check, island: 'incorrect' });
  //       }
  //       break;
  //     case 'province':
  //       if (formatRoles.regexOnlyText.test(inputValue)) {
  //         setCheck({ ...check, province: 'correct' });
  //         setData({ ...data, province: inputValue });
  //       } else {
  //         setCheck({ ...check, province: 'incorrect' });
  //       }
  //       break;
  //     case 'town':
  //       if (formatRoles.regexOnlyText.test(inputValue)) {
  //         setCheck({ ...check, town: 'correct' });
  //         setData({ ...data, town: inputValue });
  //       } else {
  //         setCheck({ ...check, town: 'incorrect' });
  //       }
  //       break;
  //     case 'address':
  //       if (formatRoles.regexAddress.test(inputValue)) {
  //         setCheck({ ...check, address: 'correct' });
  //         setData({ ...data, address: inputValue });
  //       } else {
  //         setCheck({ ...check, address: 'incorrect' });
  //       }
  //       break;
  //     case 'twitter':
  //       if (formatRoles.regexTwitter.test(inputValue)) {
  //         setCheck({ ...check, twitter: 'correct' });
  //         setData({ ...data, twitter: inputValue });
  //       } else {
  //         setCheck({ ...check, twitter: 'incorrect' });
  //       }
  //       break;
  //     case 'instagram':
  //       if (formatRoles.regexInstagram.test(inputValue)) {
  //         setCheck({ ...check, instagram: 'correct' });
  //         setData({ ...data, instagram: inputValue });
  //       } else {
  //         setCheck({ ...check, instagram: 'incorrect' });
  //       }
  //       break;
  //     case 'linkedin':
  //       if (formatRoles.regexLinkedin.test(inputValue)) {
  //         setCheck({ ...check, linkedin: 'correct' });
  //         setData({ ...data, linkedin: inputValue });
  //       } else {
  //         setCheck({ ...check, linkedin: 'incorrect' });
  //       }
  //       break;
  //     case 'information':
  //       if (formatRoles.regexOnlyText.test(inputValue) && inputValue.length <= 500) {
  //         setCheck({ ...check, additionalInformation: 'correct' });
  //         setData({ ...data, additionalInformation: inputValue });
  //       } else {
  //         setCheck({ ...check, additionalInformation: 'incorrect' });
  //       }
  //       break;
  //   }
  // };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(data);
    profileService.editProfile(data);
  };

  return (
    <form className="main-div" onSubmit={handleSubmit}>
      <div className={'personal-data'}>
        <h2>Información personal</h2>
        <header>
          <label>
            <Image source={profile_example} description="Profile image" />
            <input type="file" />
          </label>
        </header>
        <div className={'row first-row-personal-data'}>
          <FieldForm
            title="Nombre"
            name="name"
            type="text"
            stateValidate={check.name}
            onChange={(e) => {
              checkIsAllowedValue(e);
            }}
            messageInfoUser={
              'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30'
            }
          />
          <FieldForm
            title="Apellidos"
            name="surname"
            type="text"
            stateValidate={check.surname}
            onChange={(e) => {
              checkIsAllowedValue(e);
            }}
            messageInfoUser={
              'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30'
            }
          />
        </div>
        <div className={'row second-row-personal-data'}>
          <section>
            <FieldForm
              title="Fecha de nacimiento"
              name="birthday"
              type="date"
              stateValidate={check.birthDate}
              onChange={(e) => {
                checkIsAllowedValue(e);
              }}
            />
          </section>
          <FieldForm
            title="Teléfono"
            name="phoneNumber"
            type="text"
            stateValidate={check.phoneNumber}
            onChange={(e) => {
              checkIsAllowedValue(e);
            }}
            messageInfoUser={'Formato incorrecto Ej: +XX XXXXXXXXX o +XXX'}
          />
          <FieldForm
            title="Email"
            name="email"
            type="email"
            stateValidate={check.email}
            onChange={(e) => {
              checkIsAllowedValue(e);
            }}
            messageInfoUser={'Formato incorrecto'}
          />
        </div>
      </div>
      <div className={'row second-row'}>
        <div className={'col location-data'}>
          <h2>Localización</h2>
          <div className={'row location-data-first-row'}>
            <FieldForm
              title="Código Postal"
              name="zipcode"
              type="text"
              stateValidate={check.zipCode}
              onChange={(e) => {
                checkIsAllowedValue(e);
              }}
              messageInfoUser={
                'Formato incorrecto, solamente puede contener número con un máximo de cinco dígitos'
              }
            />
            <FieldForm
              title="Isla"
              name="island"
              type="text"
              stateValidate={check.island}
              onChange={(e) => checkIsAllowedValue(e)}
            />
          </div>
          <div className={'row location-data-second-row'}>
            <FieldForm
              title="Provincia"
              name="province"
              type="text"
              stateValidate={check.province}
              onChange={(e) => checkIsAllowedValue(e)}
              messageInfoUser={'Formato incorrecto solamente puede contener letras'}
            />
            <FieldForm
              title="Ciudad"
              name="town"
              type="text"
              stateValidate={check.town}
              onChange={(e) => checkIsAllowedValue(e)}
              messageInfoUser={'Formato incorrecto solamente puede contener letras'}
            />
          </div>
          <div className={'row location-data-third-row'}>
            <FieldForm
              title="Dirección"
              name="address"
              type="text"
              stateValidate={check.address}
              onChange={(e) => {
                checkIsAllowedValue(e);
              }}
              messageInfoUser={'Formato incorrecto Ej: Calle Nombre de la calle X'}
            />
          </div>
        </div>

        <div className={'col additional-data'}>
          <h2>Información adicional</h2>
          <div className={'col additional-data-row'}>
            <div className={'col additional-data-first-col'}>
              <div className={'row url-networks'}>
                <FieldForm
                  title="Twitter"
                  name="twitter"
                  type="url"
                  stateValidate={check.twitter}
                  onChange={(e) => {
                    checkIsAllowedValue(e);
                  }}
                  messageInfoUser={
                    'Formato incorrecto Ej: "https://twitter.com/nombre_de_usuario"'
                  }
                />
              </div>
              <div className={'row url-networks'}>
                <FieldForm
                  title="LinkedIn"
                  name="linkedin"
                  type="url"
                  stateValidate={check.linkedin}
                  onChange={(e) => {
                    checkIsAllowedValue(e);
                  }}
                  messageInfoUser={
                    'Formato incorrecto Ej: "https://linkedin.com/in/nombre_de_usuario"'
                  }
                />
              </div>
              <div className={'row url-networks'}>
                <FieldForm
                  title="Instagram"
                  name="instagram"
                  type="url"
                  stateValidate={check.instagram}
                  onChange={(e) => {
                    checkIsAllowedValue(e);
                  }}
                  messageInfoUser={
                    'Formato incorrecto Ej: "https://instagram.com/nombre_de_usuario"'
                  }
                />
              </div>
            </div>
            <div className={'col additional-data-second-col'}>
              <TextAreaForm
                title="Información de interès"
                name="information"
                rows={16}
                cols={3}
                placeholder="Información de interés"
                onChange={(e) => {
                  checkIsAllowedValue(e);
                }}
                messageInfoUser={
                  'Formato incorrecto solamente puede contener texto con un máximo de 500 carácteres'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row third-row">
        <div className={'col cv-button-col'}>
          <label className={cvButtonClass}>
            <input type="file" onChange={handleChange} />
            Adjuntar CV
          </label>
        </div>
        <div className={'col submit-button'}>
          <SubmitButton text="Actualizar perfil" />
        </div>
      </div>
    </form>
  );
};

MixModifyUserForm.displayName = 'mixModifyUserForm';
