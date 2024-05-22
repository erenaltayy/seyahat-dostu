import TanitimKartlari from '@/components/TanitimKartlari'
import SikcaSorulanSorular from '@/components/SikcaSorulanSorular'
import FormAlani from '@/components/FormAlani'
import HakkindaKarti from '@/components/HakkındaKarti'

export default function Index() {
  return (
    <div className="flex flex-col justify-center gap-y-24 my-12 w-screen">
      <FormAlani></FormAlani>
      <TanitimKartlari></TanitimKartlari>
      <SikcaSorulanSorular></SikcaSorulanSorular>
      <HakkindaKarti></HakkindaKarti>
    </div>
  )
}
