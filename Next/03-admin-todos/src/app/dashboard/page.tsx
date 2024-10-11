import { WidgetItem } from '../../components/widgetItem/WidgetItem';

export default function DashboardPage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <WidgetItem title='Global Activities' value={23988} subValue={2} subtitle='Compared to last week $13,988' />
        </div>
    );
}