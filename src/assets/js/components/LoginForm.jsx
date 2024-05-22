import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      // Authentication logic goes here
      alert('Logged in successfully!');
    }
  };

  const handleSignUpRedirect = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-white">Kullanıcı Adı</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
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
              className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
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
            type="submit"
            className={`w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
          >
            Giriş Yap
          </button>
        </div>
        <div className="text-center mt-4 text-white">
          Hesabınız yok mu? <button onClick={handleSignUpRedirect} className="text-teal-400 hover:text-teal-500">Kaydol</button>
        </div>
      </form>
    </div>
  );
}
