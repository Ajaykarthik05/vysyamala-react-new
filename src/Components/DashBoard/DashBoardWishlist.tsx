import { IoArrowBackOutline } from "react-icons/io5";
import { WishlistCard } from '../../Components/Wishlist/WishlistCard';
import { SuggestedProfiles } from '../../Components/LoginHome/SuggestedProfiles';

interface DashBoardWishlistProps {
    dashBoardAgain: () => void;
}
export const DashBoardWishlist: React.FC<DashBoardWishlistProps> = ({ dashBoardAgain }) => {
    return (
        <div className="bg-grayBg">
            <div className="container mx-auto py-10">

                <div className="flex items-center mb-5">
                    <IoArrowBackOutline onClick={dashBoardAgain} className="text-[24px] mr-2 cursor-pointer" />
                    <h4 className="text-[24px] text-vysyamalaBlackSecondary font-bold"> Wishlist
                        <span className="text-sm text-primary"> (05)</span>
                    </h4>
                </div>

                {/* ListCard */}
                <div>
                    <WishlistCard page={0} perPage={0} />
                    {/* <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard /> */}
                </div>
            </div>
            {/* Suggested Profiles */}
            <SuggestedProfiles />

        </div>
    )
}
