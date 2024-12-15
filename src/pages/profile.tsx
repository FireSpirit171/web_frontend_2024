import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { updateProfile } from "@/store/userSlice";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userName = useSelector((state: RootState) => state.user.userName);

  const [email, setEmail] = useState(userName || "");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await dispatch(updateProfile({ email, password: password || undefined })).unwrap();
      setPassword("");
    } catch (err) {
      setError((err as Error).message || "Ошибка при обновлении профиля.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <h1>Профиль</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="profile-form"
      >
        <label>
          <h1 className="profile__title">Почта:</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <h1 className="profile__title">Пароль:</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите новый пароль"
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Сохранение..." : "Сохранить"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ProfilePage;
