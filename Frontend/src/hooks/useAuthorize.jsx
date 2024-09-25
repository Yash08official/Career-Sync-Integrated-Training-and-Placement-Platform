import { useAuth } from "../context/auth"
const Roles = Object.freeze({
      Tpo: 'tpo',
      Teacher: 'teacher',
      Student: 'student',
});


const useAuthorize = () => {
      const { user } = useAuth();
      const isAuthorize = [Roles.Teacher, Roles.Teacher].includes(user?.Role);
      return { isAuthorize }
}

export { useAuthorize }
