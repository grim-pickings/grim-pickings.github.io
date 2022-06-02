$(document).ready(initAddPeopleListeners);

function initAddPeopleListeners() {
    $('.ui.form').submit(addPerson);
    $('#add-link').click(addLink);
}

const links = [];

function addPerson(e) {
    e.preventDefault();
    const fields = $('.ui.form input, .ui.form textarea');
    // fields.forEach()
    const obj = [...fields].reduce((acc, field) => {
        const retObj = { ...acc };
        retObj[field.name] = $(field).val();
        return retObj;
    }, {});
    console.log({ ...obj, links: links });
}

function addLink() {
    const linkName = $("input[name='linkName']").val();
    const linkUrl = $("input[name='linkUrl']").val();
    links.push({ name: linkName, url: linkUrl });
}
