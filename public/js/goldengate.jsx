var initParts = [
    {
        id: 'A1',
        size: 1,
        label: 'DIST',
        compatible: ['A2'],
        childParts: []
    },
    {
        id: 'A2',
        size: 1,
        label: 'PROX',
        compatible: ['A1', 'A3'],
        childParts: []
    },
    {
        id: 'A3',
        size: 1,
        label: 'CORE',
        compatible: ['A2', 'B1'],
        childParts: []
    },
    {
        id: 'B1',
        size: 1,
        label: '5UTR',
        compatible: ['A3', 'B2'],
        childParts: []
    },
    {
        id: 'B2',
        size: 1,
        label: 'NTAG',
        compatible: ['B1', 'B3'],
        childParts: []
    },
    {
        id: 'B3',
        size: 1,
        label: 'CDS1',
        compatible: ['B2', 'B4'],
        childParts: []
    },
    {
        id: 'B4',
        size: 1,
        label: 'CDS2',
        compatible: ['B3', 'B5'],
        childParts: []
    },
    {
        id: 'B5',
        size: 1,
        label: 'CTAG',
        compatible: ['B4', 'B6'],
        childParts: []
    },
    {
        id: 'B6',
        size: 1,
        label: '3UTR',
        compatible: ['B5', 'C1'],
        childParts: []
    },
    {
        id: 'C1',
        size: 1,
        label: 'TERM',
        compatible: ['B6'],
        childParts: []
    }

];

var otherParts = [
    {
        id: 'DISTPROX',
        size: 2,
        label: 'DIST + PROX',
        compatible: [],
        childParts: ['A1', 'A2']
    },
    {
        id: 'DISTPROXCORE',
        size: 3,
        label: 'DIST + PROX + CORE',
        compatible: [],
        childParts: ['DISTPROX', 'A3']
    },
    {
        id: 'DISTPROXCORE5UTR',
        size: 4,
        label: 'DIST + PROX + CORE + 5UTR',
        compatible: [],
        childParts: ['DISTPROXCORE', 'B1']
    },
    {
        id: 'DISTPROXCORE5UTRNTAG',
        size: 5,
        label: 'DIST + PROX + CORE + 5UTR + NTAG',
        compatible: [],
        childParts: ['DISTPROXCORE5UTR', 'B2']
    },
    {
        id: 'DISTPROXCORE5UTRNTAGCDS1',
        size: 6,
        label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1',
        compatible: [],
        childParts: ['DISTPROXCORE5UTRNTAG', 'B3']
    },
    {
        id: 'DISTPROXCORE5UTRNTAGCDS1CDS2',
        size: 7,
        label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2',
        compatible: [],
        childParts: ['DISTPROXCORE5UTRNTAGCDS1', 'B4']
    },
    {
        id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG',
        size: 8,
        label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG',
        compatible: [],
        childParts: ['DISTPROXCORE5UTRNTAGCDS1CDS2', 'B5']
    },
    {
        id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTR',
        size: 9,
        label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR',
        compatible: [],
        childParts: ['DISTPROXCORE5UTRNTAGCDS1CDS2CTAG', 'B6']
    },
    {
        id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
        size: 10,
        label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTR', 'C1']
    },
    {
        id: 'PROXCORE',
        size: 2,
        label: 'PROX + CORE',
        compatible: [],
        childParts: ['A2', 'A3']
    },
    {
        id: 'CORE5UTR',
        size: 2,
        label: 'CORE + 5UTR',
        compatible: [],
        childParts: ['A3', 'B1']
    },
    {
        id: '5UTRNTAG',
        size: 2,
        label: '5UTR + NTAG',
        compatible: [],
        childParts: ['B1', 'B2']
    },
    {
        id: 'NTAGCDS1',
        size: 2,
        label: 'NTAG + CDS1',
        compatible: [],
        childParts: ['B2', 'B3']
    },
    {
        id: 'CDS1CDS2',
        size: 2,
        label: 'CDS1 + CDS2',
        compatible: [],
        childParts: ['B3', 'B4']
    },
    {
        id: 'CDS2CTAG',
        size: 2,
        label: 'CDS2 + CTAG',
        compatible: [],
        childParts: ['B4', 'B5']
    },
    {
        id: 'CTAG3UTR',
        size: 2,
        label: 'CTAG + 3UTR',
        compatible: [],
        childParts: ['B5', 'B6']
    },
    {
        id: '3UTRTERM',
        size: 2,
        label: '3UTR + TERM',
        compatible: [],
        childParts: ['B6', 'C1']
    },
    {
        id: 'DISTPROXCORE5URT',
        size: 4,
        label: 'DIST+PROX+CORE+5URT',
        compatible: [],
        childParts: ['DISTPROX', 'CORE5UTR']
    },
    {
        id: 'NTAGCDS1CDS2CTAG',
        size: 4,
        label: 'NTAG+CDS1+CDS2+CTAG',
        compatible: [],
        childParts: ['NTAGCDS1', 'CDS2CTAG']
    },
    {
        id: 'DISTPROXCORE5URTNTAGCDS1CDS2CTAG',
        size: 8,
        label: 'DIST+PROX+CORE+5URT+NTAG+CDS1+CDS2+CTAG',
        compatible: [],
        childParts: ['DISTPROXCORE5URT', 'NTAGCDS1CDS2CTAG']
    },
    {
        id: 'DISTPROXCORE5URTNTAGCDS1CDS2CTAG3UTRTERM',
        size: 10,
        label: 'DIST+PROX+CORE+5URT+NTAG+CDS1+CDS2+CTAG+3UTR+TERM',
        compatible: [],
        childParts: ['DISTPROXCORE5URTNTAGCDS1CDS2CTAG', '3UTRTERM']
    },
    {
        id: 'CTAG3UTRTERM',
        size: 3,
        label: 'CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['B5', '3UTRTERM']
    },
    {
        id: 'CDS2CTAG3UTRTERM',
        size: 4,
        label: 'CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['B4', 'CTAG3UTRTERM']
    },
    {
        id: 'CDS1CDS2CTAG3UTRTERM',
        size: 5,
        label: 'CDS1 + CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['B3', 'CDS2CTAG3UTRTERM']
    },
    {
        id: 'NTAGCDS1CDS2CTAG3UTRTERM',
        size: 6,
        label: 'NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['B2', 'CDS1CDS2CTAG3UTRTERM']
    },
    {
        id: '5UTRNTAGCDS1CDS2CTAG3UTRTERM',
        size: 7,
        label: '5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['B1', 'NTAGCDS1CDS2CTAG3UTRTERM']
    },
    {
        id: 'CORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
        size: 8,
        label: 'CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['A3', '5UTRNTAGCDS1CDS2CTAG3UTRTERM']
    },
    {
        id: 'PROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
        size: 9,
        label: 'PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['A2', 'CORE5UTRNTAGCDS1CDS2CTAG3UTRTERM']
    },
    {
        id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
        size: 10,
        label: 'DIS + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
        compatible: [],
        childParts: ['A1', 'PROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM']
    }

];

var allParts = initParts.concat(otherParts);


const Part = React.createClass({
    displayName: 'part',

    render: function render() {
        return (
            <div className="part">
                <div className="name">DIST</div>

                <div className="controls">
                    <div className="merge">Merge Up</div>
                    <select>
                        <option>Test</option>
                    </select>
                    <div className="merge">Merge Down</div>
                </div>
            </div>
        )
    }
});


const App = React.createClass({
    displayName: 'app',
    componentDidMount: function componentDidMount() {
    },
    getInitialState: function getInitialState() {
        return {}
    },
    render: function render() {
        const self = this;

        return (
            <div>

                {initParts.map(function (object, i) {
                    return <Part key={i}>{object}</Part>;
                })}

            </div>
        )
    }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));