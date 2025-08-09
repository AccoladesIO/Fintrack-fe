import { UserAvatar } from '@/components/ui/user-avatar';
import { allActiveUsers } from '@/lib/sample-data';

export function UserAvatarsSection() {
    const topThree = allActiveUsers.slice(0, 3);
    const remainingCount = allActiveUsers.length > 3 ? allActiveUsers.length - 3 : 0;

    return (
        <div className="flex items-center gap-4">
            {/* Text: Ava, Liam, Noah +12 others */}
            <span className="text-sm text-gray-600">
                {topThree.map(u => u.name).join(', ')}
                {remainingCount > 0 && ` +${remainingCount} others`}
            </span>

            {/* Avatars */}
            <div className="flex -space-x-2">
                {topThree.map((user, index) => (
                    <UserAvatar
                        key={index}
                        name={user.name}
                        className="hover:z-10 hover:-translate-y-1 transition-all duration-200"
                    />
                ))}

                {remainingCount > 0 && (
                    <div className="h-8 w-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-all duration-200 hover:shadow-md cursor-pointer">
                        <span className="text-xs text-gray-600 font-medium">
                            +{remainingCount}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
