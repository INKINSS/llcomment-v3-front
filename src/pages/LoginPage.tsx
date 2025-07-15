import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { FaGoogle } from "react-icons/fa";
import { BlurFade } from "../components/magicui/blur-fade";


export const LoginPage = () => {

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:3000/auth/google';
    }
  return (
    <div className="flex justify-center h-[75dvh] w-full">
        <section className="py-10 px-15 w-full flex-1">
            <div className="flex flex-col mb-5">
                <BlurFade duration={0.7} inView={true}>
                    <h1 className="text-4xl font-semibold text-textPrimary">Iniciar Sesion</h1>
                </BlurFade>
            </div>
            <BlurFade duration={0.7} delay={0.2} inView={true}>
            <form className="flex flex-col gap-5 text-textPrimary">
                <div className="flex flex-col gap-2">
                    <Label>username</Label>
                    <Input className="rounded-none border-b-indigo-500 border-t-transparent border-l-transparent border-r-transparent" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>contraseña</Label>
                    <Input className="rounded-none border-b-indigo-500 border-t-transparent border-l-transparent border-r-transparent" type="password" />
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-500 py-6 text-white text-xl rounded-none" type="submit">iniciar sesion</Button>
            </form>
            </BlurFade>
            <BlurFade duration={0.7} delay={0.4} inView={true}>
                <div>
                <p className="text-textSecondary text-center my-4">o tambien</p>
                <Button className="bg-white w-full hover:bg-gray-300 py-6 text-slate-700 text-xl rounded-none font-light" onClick={handleGoogleLogin}>
                    <FaGoogle className="mr-2" /> inicia sesion con Google
                </Button>
            </div>
            </BlurFade>
        </section>
        <section className="hidden md:block md:flex-1 lg:flex-2/6">
            <p>hola a todos</p>
        </section>
    </div>
  )
}
