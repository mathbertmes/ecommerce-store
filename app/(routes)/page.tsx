import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate =0;

const HomePage = async () => {
  const billboard = await getBillboard("74702f60-a277-4757-b9bc-b7b991123890");
  return(
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  )
}

export default HomePage;