import { useState } from 'react';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    interests: [],
    isDriver: false,
    profilePhoto: null,
    age: 18,
    location: '',
    about: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const [newInterest, setNewInterest] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({
        ...formData,
        phone: formattedPhone
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setFormData({
        ...formData,
        profilePhoto: file
      });
    } else {
      alert('Yalnızca JPG veya PNG dosyalarına izin verilmektedir.');
    }
  };

  const handleNextStep = () => {
    const { email, phone, username, password, confirmPassword } = formData;
    if (!email || !phone || !username || !password || !confirmPassword || password !== confirmPassword) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { interests, isDriver, age, location, about } = formData;
    if (!interests.length || !age || !location || !about || age < 18) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      // Form submission logic goes here
      alert('Form submitted successfully!');
    }
  };

  const handleAddInterest = () => {
    if (newInterest && !formData.interests.includes(newInterest)) {
      setFormData({
        ...formData,
        interests: [...formData.interests, newInterest]
      });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter(i => i !== interest)
    });
  };

  const formatPhoneNumber = (phone) => {
    phone = phone.replace(/[^\d]/g, '');
    if (phone.length > 10) phone = phone.slice(0, 10);
    const match = phone.match(/(\d{3})(\d{3})(\d{2})(\d{2})/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}-${match[4]}`;
    }
    return phone;
  };

  const handleSignUpRedirect = () => {
    window.location.href = '/login';
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">Telefon Numarası</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                  placeholder="xxx-xxx-xx-xx"
                />
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white">Kullanıcı Adı</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">Şifre</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 py-2 text-white"
                  >
                    {showPassword ? 'Gizle' : 'Göster'}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Şifreyi Doğrula</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 py-2 text-white"
                  >
                    {showPassword ? 'Gizle' : 'Göster'}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className={`w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
                >
                  İleri
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-white text-center">Platformu etkin bir şekilde kullanabilmen için daha fazla bilgiye ihtiyacımız var ^_^</label>
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-white">İlgi Alanları</label>
                <div className="flex space-x-3 mt-1">
                  <select
                    id="interests"
                    name="interests"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    className="block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                  >
                    <option value="">Seçiniz</option>
                    <option value="Spor">Spor</option>
                    <option value="Müzik">Müzik</option>
                    <option value="Sanat">Sanat</option>
                    <option value="Teknoloji">Teknoloji</option>
                    <option value="Gezmek">Gezmek</option>
                  </select>
                  <button
                    type="button"
                    onClick={handleAddInterest}
                    className="py-3 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out"
                  >
                    Ekle
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap space-x-2">
                  {formData.interests.map((interest, index) => (
                    <span key={index} className="bg-teal-600 text-white py-1 px-3 rounded-md flex items-center space-x-2">
                      <span>{interest}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveInterest(interest)}
                        className="text-white ml-2"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="isDriver" className="block text-sm font-medium text-white">Şoför müsünüz?</label>
                <input
                  type="checkbox"
                  id="isDriver"
                  name="isDriver"
                  checked={formData.isDriver}
                  onChange={handleChange}
                  className="mt-1 block"
                />
              </div>
              <div>
                <label htmlFor="profilePhoto" className="block text-sm font-medium text-white">Profil Fotoğrafı</label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  accept="image/jpeg, image/png"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-white"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-white">Yaş</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-white">Lokasyon</label>
                <select

                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                >
                  <option value="">Seçiniz</option>
                  <option value="istanbul">İstanbul</option>
                  <option value="ankara">Ankara</option>
                  <option value="izmir">İzmir</option>
                  <option value="antalya">Antalya</option>
                  <option value="adana">Adana</option>
                </select>
              </div>
              <div>
                <label htmlFor="about" className="block text-sm font-medium text-white">Hakkımda</label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
                >
                  Kaydol
                </button>
              </div>
            </>
          )}
          <div className="text-center mt-4 text-white">
            Hesabınız var mu? <button onClick={handleSignUpRedirect} className="text-teal-400 hover:text-teal-500">Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
  );
}
