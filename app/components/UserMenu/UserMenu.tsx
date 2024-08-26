'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Props {}
const UserMenu = (props: Props) => {
    return (
        <div className="">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" data-testid="avatar-image" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-auto mr-10" data-testid="dropdown-menu">
                    <DropdownMenuItem onClick={() => {}}>My Account</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {}}>Subscription</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {}}>Refer a friend</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => {}}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
export default UserMenu;
