import { Tabs, Tab } from '@radix-ui/react-tabs';

function Dashboard() {
    return (
        <div>
            <Tabs defaultValue="subjects">
                <Tab value="subjects">Subjects</Tab>
                <Tab value="attendance">Attendance</Tab>
                <Tab value="marks">Marks</Tab>
            </Tabs>
            <div>
                <Tab.Panel value="subjects">
                    {/* Content for subjects container */}
                </Tab.Panel>
                <Tab.Panel value="attendance">
                    {/* Content for attendance container */}
                </Tab.Panel>
                <Tab.Panel value="marks">
                    {/* Content for marks container */}
                </Tab.Panel>
            </div>
        </div>
    );
}

export default Dashboard;