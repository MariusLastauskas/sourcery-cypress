class Common {
    getDay(index) {
        switch (index) {
            case 1:
                return 'monday';
                break;
            case 2:
                return 'tuesday';
                break;
            case 3:
                return 'wednesday';
                break;
            case 4:
                return 'thursday';
                break;
            case 5:
                return 'friday';
                break;
            default:
                break;
        }
    }
}

export default Common;