export default function getTemplate(lang: string) {
    let template = '';

    switch (lang) {
        case 'python':
            template = `a = 10\nprint(a)`;
            break;

        case 'javascript':
            template = `const a = 10;\nconsole.log(a);`;
            break;

        case 'typescript':
            template = `let a: number;\na = 10;\nconsole.log(a);`;
            break;

        case 'c':
            template = `#include <stdio.h>\n\nint main() {\n\tprintf("Hello, World!");\n\treturn 0;\n}\n`;
            break;

        case 'cpp':
            template = `#include<iostream>\n\nusing namespace std;\n\nint main() {\n\tcout << "Hello, World!";\n\treturn 0;\n}\n
            `;
            break;
    }
    return template;
}
