'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Props {}
const UserMenu = (props: Props) => {
    return (
        <div className="relative">
            <div className="absolute right-2 top-0 px-3 flex flex-row-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" data-testId="avatar-image" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-auto mr-10" data-testId="dropdown-menu">
                        <DropdownMenuItem onClick={() => {}}>My Account</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {}}>Subscription</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {}}>Refer a friend</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => {}}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
export default UserMenu;
